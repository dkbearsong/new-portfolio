import json
import os
from pathlib import Path
from datetime import datetime

import requests


GITHUB_USERNAME = os.environ["GITHUB_USERNAME"]
GITHUB_TOKEN = os.environ["GITHUB_TOKEN"]

API_BASE = "https://api.github.com"

OUTPUT_FILE = Path("data/projects.json")

HEADERS = {
    "Accept": "application/vnd.github+json",
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "X-GitHub-Api-Version": "2022-11-28",
}


def github_get(url):
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    return response.json()


def get_repositories():
    """Get all public repositories for the configured user."""

    url = f"{API_BASE}/users/{GITHUB_USERNAME}/repos"

    params = {
        "per_page": 100,
        "sort": "pushed",
        "direction": "desc",
    }

    response = requests.get(
        url,
        headers=HEADERS,
        params=params,
    )

    response.raise_for_status()

    return response.json()


def get_readme(repo_name):
    """Retrieve README metadata/content."""

    url = (
        f"{API_BASE}/repos/"
        f"{GITHUB_USERNAME}/{repo_name}/readme"
    )

    response = requests.get(
        url,
        headers=HEADERS,
    )

    # README doesn't necessarily exist.
    if response.status_code == 404:
        return None

    response.raise_for_status()

    return response.json()


def get_languages(repo_name):
    """Retrieve language statistics."""

    url = (
        f"{API_BASE}/repos/"
        f"{GITHUB_USERNAME}/{repo_name}/languages"
    )

    return github_get(url)


def decode_readme(readme_data):
    """Decode README content returned by GitHub."""

    if not readme_data:
        return ""

    import base64

    content = readme_data.get("content", "")

    try:
        return base64.b64decode(content).decode("utf-8")
    except Exception:
        return ""


def build_project(repo):
    """Convert GitHub repository data into portfolio project data."""

    repo_name = repo["name"]

    # Get README
    readme_data = get_readme(repo_name)
    readme_content = decode_readme(readme_data)

    # Get language information
    languages = get_languages(repo_name)

    # GitHub returns languages ordered roughly by
    # amount of code.
    language_names = list(languages.keys())

    # Combine GitHub languages and repository topics.
    topics = repo.get("topics", [])

    return {
        "name": repo["name"],
        "slug": repo["name"],
        "description": repo.get("description") or "",
        "githubUrl": repo["html_url"],
        "demoUrl": repo.get("homepage") or None,
        "technologies": language_names,
        "topics": topics,
        "status": "active",
        "lastUpdated": repo["pushed_at"],
        "readme": readme_content,
    }


def main():

    print(f"Fetching repositories for {GITHUB_USERNAME}...")

    repositories = get_repositories()

    projects = []

    for repo in repositories:

        # Ignore forks
        if repo["fork"]:
            continue

        # Ignore archived repositories
        if repo["archived"]:
            continue

        # Only include repositories tagged "portfolio"
        if "portfolio" not in repo.get("topics", []):
            continue

        print(f"Processing: {repo['name']}")

        project = build_project(repo)

        projects.append(project)

    # Sort newest activity first.
    projects.sort(
        key=lambda project: project["lastUpdated"],
        reverse=True,
    )

    # Make sure data directory exists.
    OUTPUT_FILE.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    # Write JSON.
    with OUTPUT_FILE.open(
        "w",
        encoding="utf-8",
    ) as file:

        json.dump(
            projects,
            file,
            indent=2,
            ensure_ascii=False,
        )

        file.write("\n")

    print(
        f"Wrote {len(projects)} projects to "
        f"{OUTPUT_FILE}"
    )


if __name__ == "__main__":
    main()