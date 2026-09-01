export const personalInfo = {
  name: 'Dereck Goolsby-Bearsong',
  tagline: 'Engineering Efficiency Through Intelligent Customer Support',
  role: 'Senior Technical Support Engineer & AI Automation Specialist',
  email: 'dkbearsong@gmail.com',
  location: 'Morrisville, NC',
  openToRelocate: true,
  socialLinks: {
    github: 'https://github.com/dkbearsong',
    linkedin: 'https://www.linkedin.com/in/dereck-goolsby-bearsong/',
    substack: 'https://dereckbearsong.substack.com',
    n8n: 'https://n8n.io/creators/dkbearsong/'
  }
};

export const summaryData = {
  paragraphs: [
    "I'm a Cloud & Software Support Engineer with 13+ years of experience transitioning into AI Engineering, focused on building autonomous agent workflows, developer tooling, and automated cloud pipelines. I'm driven by a simple goal: eliminating operational friction so builders can focus on what they do best—building.",
    "Combining production systems with modern AI, I specialize in end-to-end orchestration. Currently, I am building an autonomous development pipeline that listens to Jira webhooks, contextually gathers source files, provisions isolated container environments, and dispatches tasks to local or cloud coding agents for remote execution and tracked resolution.",
    "I am open to full-time AI Engineering, Support Operations, and Automation roles, as well as select freelance projects. If you’re looking to scale your engineering workflows or integrate agentic systems into your infrastructure, let’s connect."
  ]
};

export const experiences = [
  {
    id: 'atlassian-senior',
    role: 'Senior Support Engineer I',
    company: 'Atlassian',
    companyUrl: 'https://www.atlassian.com/',
    period: 'Jan 2025 - August 2025',
    description: 'Took ownership of complex escalations by collaborating directly with development teams to troubleshoot critical issues and prevent recurrence, while simultaneously enhancing service quality through weekly case reviews that assessed accuracy, completeness, and resolution speed. Drove operational improvements by developing SOPs and enablement sessions that increased US government client response times by 15% and metrics tracking adherence by 25%. Additionally, I accelerated product stability by submitting over 100 bug reports and feature requests, working directly with engineering to prioritize and resolve newly discovered issues.',
    highlights: [
      'Managed advanced segment escalations with direct dev team collaboration',
      'Increased US Gov client response times by 15% & metric adherence by 25%',
      'Filed 100+ prioritized bug reports & feature requests directly with engineering'
    ],
    skills: ['Jira', 'Splunk', 'MySQL', 'Rovo', 'Python', 'Javascript', 'Rest API', 'Gemini', 'Git', 'Webhooks', 'Postman']
  },
  {
    id: 'atlassian-cloud',
    role: 'Cloud Software Support Engineer III',
    company: 'Atlassian',
    companyUrl: 'https://www.atlassian.com/',
    period: 'August 2021 - Jan 2025',
    description: 'Delivered first-class application support for Jira Cloud while driving operational excellence by building AI and automation tools to improve efficiency. Consistently exceeded all KPIs, handling an average of 30.77 tickets per week against a target of 16, maintaining a 4.714 CSAT score, and ensuring 99.5% SLA adherence. To enhance resolution speed, I implemented Rovo AI Agents that summarize ticket comments and analyze NPS/CSAT data, reducing average case review time by 20 minutes. Beyond individual support, I reviewed over 500 AI chatbot conversations to ensure accuracy, accelerating deployment five months ahead of schedule while identifying patterns that reduced estimated AI support costs by $500k. Furthermore, I developed SOPs and enablement sessions that improved US government client response times by 15% and metrics tracking adherence by 25%, all while contributing to product stability by submitting over 100 bug reports and feature requests for newly discovered issues.',
    highlights: [
      'Maintained 4.714 / 5 CSAT & 99.5% SLA adherence across 30+ tickets/week (target: 16)',
      'Built Rovo AI agents cutting case review time by 20 mins',
      'Reviewed 500+ AI bot conversations saving ~$500k in projected support costs'
    ],
    skills: ['Jira', 'Splunk', 'MySQL', 'Python', 'Javascript', 'Rest API', 'Git', 'Webhooks', 'Postman']
  },
  {
    id: 'mitek',
    role: 'Software Support Engineer II',
    company: 'Mitek',
    companyUrl: 'https://www.mitek-us.com/',
    period: 'Sep 2018 - August 2021',
    description: 'Delivered advanced database, API, and server-side support for enterprise construction management software. Built an automated Python/RegEx data ingestion framework that normalized 95% of incoming XML payloads, slashing daily escalated resolution times by 33% and intake backlogs by 40%. Served as the team’s SQL specialist, directly resolving 15% of cases via advanced database querying and reducing engineering escalations by 20%. Established comprehensive technical documentation and training modules that cut new hire onboarding by 22% while boosting first-touch resolution by 35%.',
    highlights: [
      'Built Python XML parser cutting escalated case resolution time by 6+ days',
      'Maintained escalation rate 4% below target through deep server & API diagnosis',
      'Resolved 15% of team tickets as primary internal SQL specialist'
    ],
    skills: ['Python', 'T-SQL', 'Rest API']
  },
  {
    id: 'lexisnexis',
    role: 'Application Training Analyst & Support Specialist',
    company: 'LexisNexis',
    companyUrl: 'https://www.lexisnexis.com/en-us',
    period: 'April 2014 - April 2018',
    description: 'Delivered dedicated technical support, database recovery, and client enablement for legal enterprise and government accounts using the CaseMap litigation platform. Resolved deep data integrity and workflow issues through Microsoft Access database analysis and schema manipulation. Overhauled the client training curriculum into an interactive, workflow-specific program that boosted customer engagement, while authoring standardized internal documentation and standard operating procedures that anchored the successful onboarding and operational ramp of a newly launched Tier-1 support team in Manila.',
    highlights: [
      'Drove 10% improvement in enterprise client retention via redesigned training',
      'Bridged client feedback directly to engineering to resolve feature gaps'
    ],
    skills: ['Microsoft Access', 'T-SQL', 'Rest API']
  }
];

export const projects = [
  {
    id: 'jira-mcp',
    title: 'Jira MCP Server',
    category: 'AI & MCP',
    featured: true,
    description: 'This server allows an AI tool to pull information cached for a Jira data pipeline for quicker retrieval than using the search tool. The RAG tool itself will compare similarity between the query and the documents pulled and give a score to determine if it can answer the question or not, and if not recommend the AI uses the search tool. In either case it will provide the requested information to the AI to answer the query.',
    tags: ['Python', 'Jira', 'RAG', 'MCP', 'ChromaDB', 'Claude'],
    githubUrl: 'https://github.com/dkbearsong/Jira-MCP',
    liveUrl: null,
    icon: 'Brain'
  },
  {
    id: 'jira-summarizer',
    title: 'Jira Comment Log Summarizer',
    category: 'Browser Extensions',
    featured: true,
    description: 'A Chrome extension that works with Google Gemini to summarize the comment log in a ticket. Pull up any ticket in your Jira site, add your Gemini API token, then click "Summarize" to generate a bullet point summary of the comment log in seconds.',
    tags: ['Javascript', 'Jira', 'Gemini', 'Chrome API'],
    githubUrl: 'https://github.com/dkbearsong/Jira-Comment-Log-Summarizer',
    liveUrl: null,
    icon: 'Sparkles'
  },
  {
    id: 'web-scraper',
    title: 'Web Scraping Microservice',
    category: 'Backend & APIs',
    featured: true,
    description: 'Built a full web scraping microservice that gives 7 API endpoints built in Python with Flask, Beautiful Soup, and Selenium. Allows for scraping websites and crawling through them, and accounts for blocks by Cloudflare as well as methods to crawl JS-injected frameworks like React and VueJS.',
    tags: ['Python', 'Flask', 'Beautiful Soup', 'Selenium', 'Ollama'],
    githubUrl: 'https://github.com/dkbearsong',
    liveUrl: null,
    icon: 'Globe'
  },
  {
    id: 'n8n-automations',
    title: 'n8n Automation Workflows',
    category: 'Automation',
    featured: true,
    description: 'I make automation workflows in n8n and occasionally publish them on n8n\'s site. I\'ve made automations that summarize newsletters, reorganize Trello lists, auto-create Confluence pages from markdown files, and integrate with local LLMs. Check out my creator profile on n8n.',
    tags: ['Javascript', 'n8n', 'Ollama', 'Gemini', 'Confluence', 'Trello', 'Rest API'],
    githubUrl: null,
    liveUrl: 'https://n8n.io/creators/dkbearsong/',
    icon: 'Workflow'
  }
];

// Hobbies & Creative Pursuits
// Tip: To add screenshots or video files to any item, specify:
// - `image`: '/path/to/screenshot.jpg' or web URL (e.g. 'https://...')
// - `video`: '/path/to/clip.mp4' or webm URL
// - `poster`: Optional thumbnail for video
// If no media is specified, a sleek Odysseus-style tech placeholder with icon is displayed.
export const hobbies = [
  { 
    id: 'culinary',
    name: 'Culinary Arts & Cooking', 
    icon: 'ChefHat', 
    desc: 'Crafting diverse cuisines, testing heat curves, and experimenting with global flavor profiles.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    video: null,
    tag: 'Kitchen Lab'
  },
  { 
    id: 'art',
    name: 'Traditional & Digital Art', 
    icon: 'Palette', 
    desc: 'Drawing, conceptual sketching, character design, and exploring digital visual workflows.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    video: null,
    tag: 'Visual Design'
  },
  { 
    id: 'brewing',
    name: 'Home Craft Brewing', 
    icon: 'Beer', 
    desc: 'Formulating all-grain recipes, dialing in yeast fermentation profiles, and kegging custom craft beers.',
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=1200&q=80',
    video: null,
    tag: 'Craft Ferment'
  },
  { 
    id: 'martial-arts',
    name: 'Martial Arts & Trail Hiking', 
    icon: 'Flame', 
    desc: 'Discipline, physical conditioning, striking technique, and rugged backcountry trail endurance.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80',
    video: null,
    tag: 'Endurance'
  },
  { 
    id: 'coffee',
    name: 'Artisanal Coffee Roasting', 
    icon: 'Coffee', 
    desc: 'Roasting single-origin green coffee beans and profiling first crack times for nuanced extraction.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    video: null,
    tag: 'Roast Profile'
  },
  { 
    id: 'fermentation',
    name: 'Fermentation & Pickling', 
    icon: 'Sparkles', 
    desc: 'Applied microbiology in the kitchen: lacto-fermented hot sauces, seasonal kimchi, and artisan sauerkraut.',
    image: 'https://images.unsplash.com/photo-1589135233689-d56d47913309?auto=format&fit=crop&w=1200&q=80',
    video: null,
    tag: 'Microbiology'
  },
  { 
    id: 'sharpening',
    name: 'Precision Knife Sharpening', 
    icon: 'Scissors', 
    desc: 'Freehand Japanese whetstone polishing down to 8000-grit for mirror bevels and surgical push-cuts.',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=1200&q=80',
    video: null,
    tag: 'Whetstone'
  },
  { 
    id: 'gaming',
    name: 'Gaming & Anime', 
    icon: 'Gamepad2', 
    desc: 'Deep interactive storytelling, competitive mechanics, RPG systems, and anime world-building.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    video: null,
    tag: 'Interactive'
  }
];

export const skillCategories = [
  {
    name: 'Languages & Scripting',
    items: ['Python', 'Javascript (ES6+)', 'HTML5', 'CSS3', 'Bash / Shell']
  },
  {
    name: 'Frameworks & Libraries',
    items: ['Node.js', 'React.js', 'Express.js', 'Flask', 'Bootstrap 5', 'Tailwind CSS']
  },
  {
    name: 'Databases & Storage',
    items: ['MySQL', 'PostgreSQL', 'T-SQL', 'MongoDB', 'ChromaDB (Vector RAG)', 'Microsoft Access']
  },
  {
    name: 'AI, MCP & Automation',
    items: ['Model Context Protocol (MCP)', 'RAG Architecture', 'Google Gemini', 'Anthropic Claude', 'Ollama (Local LLMs)', 'Rovo AI Agents', 'n8n Workflows', 'RESTful APIs', 'Webhooks', 'Splunk', 'Postman', 'Git / GitHub']
  }
];

export const blogPosts = [
  {
    id: 'my-full-job-search-workflow',
    title: 'My Full Job Search Workflow',
    date: 'August 27, 2026',
    readTime: '13 min read',
    publication: 'Substack',
    url: 'https://dereckbearsong.substack.com/p/my-full-job-search-workflow',
    summary: 'How I process 2000 jobs overnight to find the best fit. A complete breakdown of autonomous filtering, multi-agent evaluation, and automated pipeline execution.',
    tags: ['Job Search', 'AI Workflows', 'Automation', 'System Design']
  },
  {
    id: 'jira-intelligence-hub',
    title: 'Jira Intelligence Hub',
    date: 'December 5, 2025',
    readTime: '8 min read',
    publication: 'Substack',
    url: 'https://dereckbearsong.substack.com/p/jira-intelligence-hub',
    summary: 'Connecting Jira Cloud directly to conversational AI models using Model Context Protocol (MCP) and custom agentic tools for enterprise support engineering.',
    tags: ['Jira Cloud', 'Model Context Protocol', 'AI Agents', 'Automation']
  }
];

export const navigationTabs = [
  { id: 'home', label: 'Home', path: '/', anchor: '#summary', index: 0 },
  { id: 'about', label: 'About Me', path: '/about', anchor: '#about', index: 1 },
  { id: 'portfolio', label: 'Portfolio', path: '/portfolio', anchor: '#portfolio', index: 2 },
  { id: 'blog', label: 'Blog', path: '/blog', anchor: '#blog', index: 3 },
  { id: 'contact', label: 'Contact Me', path: '/contact', anchor: '#contact', index: 4 }
];
