import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory store for contact form submissions (can be hooked to DB or email provider)
const contactSubmissions = [];

// Cache for Substack feed (10 minutes TTL)
let feedCache = {
  data: null,
  timestamp: 0
};

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    name: 'Dereck Bearsong Portfolio API'
  });
});

app.get('/api/substack-feed', async (req, res) => {
  const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
  const now = Date.now();

  if (feedCache.data && now - feedCache.timestamp < CACHE_DURATION) {
    return res.json({ success: true, source: 'cache', data: feedCache.data });
  }

  try {
    const feedUrl = 'https://dereckbearsong.substack.com/feed';
    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      }
    });

    if (!response.ok) {
      throw new Error(`Feed request failed with status: ${response.status}`);
    }

    const xml = await response.text();

    // Parse channel info
    const channelTitle = xml.match(/<channel>[\s\S]*?<title><!\[CDATA\[(.*?)\]\]><\/title>|<channel>[\s\S]*?<title>(.*?)<\/title>/)?.[1] || "The Wondrous Mind of Dereck Bearsong";
    const channelDesc = xml.match(/<channel>[\s\S]*?<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<channel>[\s\S]*?<description>([\s\S]*?)<\/description>/)?.[1] || "";
    const channelLink = xml.match(/<channel>[\s\S]*?<link>(https:\/\/.*?\.substack\.com)<\/link>/)?.[1] || "https://dereckbearsong.substack.com";
    const channelImage = xml.match(/<image>[\s\S]*?<url>(.*?)<\/url>/)?.[1] || "https://substackcdn.com/image/fetch/$s_!W9HN!,w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F78cea8f8-e1af-48b6-a773-59a2b71b44f4_320x320.jpeg";

    const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    const posts = itemMatches.map((m, idx) => {
      const itemXml = m[1];
      const title = itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/)?.[1] || itemXml.match(/<title>(.*?)<\/title>/)?.[1] || "Untitled Post";
      const link = itemXml.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const pubDateStr = itemXml.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      const creator = itemXml.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>|<dc:creator>(.*?)<\/dc:creator>/)?.[1] || "Dereck Bearsong";
      const description = itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/)?.[1] || "";
      const content = itemXml.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>|<content:encoded>([\s\S]*?)<\/content:encoded>/)?.[1] || "";

      // Extract high resolution cover image
      const enclosureImg = itemXml.match(/<enclosure[^>]+url="([^">]+)"/)?.[1];
      const contentImg = (content || description).match(/<img[^>]+src="([^">]+)"/)?.[1];
      const image = enclosureImg || contentImg || "";

      // Clean snippet text
      const rawSnippet = description || content;
      const cleanSnippet = rawSnippet
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&#8220;|&#8221;|&quot;/g, '"')
        .replace(/&#8217;|&apos;/g, "'")
        .replace(/&#8211;|&#8212;/g, "—")
        .replace(/&amp;/g, "&")
        .replace(/\s+/g, " ")
        .trim();

      // Read time estimation
      const wordCount = (content || description).replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
      const readTime = Math.max(1, Math.ceil(wordCount / 220)) + " min read";

      // Categories / tags
      const categories = [...itemXml.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>|<category>(.*?)<\/category>/g)]
        .map(c => (c[1] || c[2]).trim())
        .filter(Boolean);

      // Infer topic tags if empty
      const inferredTags = categories.length > 0 ? categories : (
        title.toLowerCase().includes('job') ? ['Job Search', 'Automation'] :
        title.toLowerCase().includes('jira') ? ['Jira Cloud', 'AI & MCP'] :
        title.toLowerCase().includes('ai') ? ['AI Engineering', 'Insights'] :
        title.toLowerCase().includes('n8n') || title.toLowerCase().includes('automation') ? ['n8n', 'Workflows'] :
        ['Substack Article', 'Tech']
      );

      return {
        id: `post-${idx}`,
        title,
        link,
        pubDate: pubDateStr,
        creator,
        image,
        snippet: cleanSnippet.length > 220 ? cleanSnippet.slice(0, 220) + "..." : cleanSnippet,
        readTime,
        tags: inferredTags
      };
    });

    const result = {
      channel: {
        title: channelTitle,
        description: channelDesc.replace(/<[^>]*>/g, '').trim(),
        link: channelLink,
        image: channelImage,
        totalPosts: posts.length
      },
      posts
    };

    feedCache = {
      data: result,
      timestamp: now
    };

    return res.json({ success: true, source: 'network', data: result });
  } catch (error) {
    console.error('[Substack Feed Error]', error.message);
    if (feedCache.data) {
      return res.json({ success: true, source: 'stale-cache', data: feedCache.data });
    }
    return res.status(500).json({ success: false, error: 'Failed to fetch Substack feed: ' + error.message });
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide all required fields (name, email, message).'
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.'
    });
  }

  const submission = {
    id: Date.now(),
    name,
    email,
    subject: subject || 'No Subject',
    message,
    createdAt: new Date().toISOString()
  };

  if (contactSubmissions.length >= 100) {
    contactSubmissions.shift();
  }
  contactSubmissions.push(submission);
  console.log(`[Contact Form Received] From: ${name} <${email}> | Subject: ${subject}`);

  return res.status(200).json({
    success: true,
    message: 'Thank you! Your message has been received. I will get back to you shortly.',
    data: { id: submission.id }
  });
});

// Serve static assets in production with aggressive cache headers for media/js/css
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath, {
  maxAge: '1d',
  etag: true
}));

// Fallback for SPA routing
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send('Portfolio API is active. Run "npm run build" to generate client build.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Server running at http://localhost:${PORT}`);
});
