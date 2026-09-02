# Dereck Goolsby-Bearsong — Personal Portfolio

A modern, responsive personal portfolio website showcasing software engineering experience, AI automation workflows, technical publications, and creative pursuits.

Built with an **Odysseus-inspired design system**, the site features sleek glassmorphism panels, ambient background particle flows, directional page transitions on desktop, touch-optimized mobile navigation, and interactive multimedia showcases.

---

## 🛠️ Tech Stack

### **Frontend & UI Architecture**
- **[React 18](https://react.dev/)**: Component-driven user interface architecture with functional components and React hooks.
- **[Vite 5](https://vitejs.dev/)**: Next-generation frontend build tooling offering fast development server startup and optimized production bundling.
- **[Framer Motion](https://www.framer.com/motion/)**: Declarative animation engine powering directional page slide/fade transitions, fluid layout animations, and timed 0.5s mobile drawer expand/collapse states.
- **[Lucide React](https://lucide.dev/)**: Comprehensive, clean vector iconography for system controls and category indicators.
- **Custom CSS & HTML5 Canvas**: 
  - Dynamic procedural particle flow rendered via HTML5 `<canvas>`.
  - Ambient radial glow effects and dot-grid background shaders.
  - CSS custom properties (design tokens) for centralized theme customization (background, panel, accent, and text hierarchy).
  - Modern glassmorphism surfaces (`backdrop-filter: blur()`) and responsive grid systems.

### **Backend & APIs**
- **[Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)**: Lightweight backend service providing API proxying and data handling.
- **[Substack RSS Feed Integration](https://dereckbearsong.substack.com)**: Dynamic article fetching and parsing with resilient multi-tier fallback (local API endpoint, Feed2Json proxy, and cached fallback data).
- **[FormSubmit API](https://formsubmit.co/)**: Asynchronous AJAX email delivery for the contact form.

---

## 🌟 Key Features & Sections

- **Executive Summary & Experience Timeline (Home / About)**: Comprehensive overview of 13+ years in cloud and enterprise software support, automation development, and AI engineering.
- **GitHub Project Showcase (Portfolio)**: Filterable and searchable feed of software repositories, MCP servers, and automation tools with dynamic tag filtering.
- **Interactive Multimedia Previews (Hobbies & Pursuits)**: Accordion gallery featuring lazy-loaded WebM/MP4 videos and high-resolution photography with smart memory management (media decoder cleanup on card collapse).
- **Substack Publication Feed (Blog)**: Real-time article feed with cover art galleries, tag filtering, search, and reading time metrics.
- **Adaptive Responsive Design**:
  - **Desktop**: Directional tab transitions that slide and fade based on navigation order.
  - **Mobile**: Individual page view rendering, half-second animated menu drawer, and touch-optimized card interactions.
