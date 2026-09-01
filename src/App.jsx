import React, { useState, useEffect } from 'react';
import { navigationTabs } from './data/portfolioData';
import Navbar from './components/Navbar';
import FlowCanvas from './components/FlowCanvas';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import MobileSinglePage from './pages/MobileSinglePage';

export default function App() {
  // Find initial tab based on path
  const getInitialTab = () => {
    const path = window.location.pathname;
    const matchedTab = navigationTabs.find(t => t.path === path);
    return matchedTab || navigationTabs[0];
  };

  const [currentTab, setCurrentTab] = useState(getInitialTab);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive breakpoint detector
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const matched = navigationTabs.find(t => t.path === path) || navigationTabs[0];
      setDirection(matched.index > currentTab.index ? 1 : -1);
      setCurrentTab(matched);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentTab]);

  // Tab selection handler
  const handleSelectTab = (tab) => {
    if (tab.id === currentTab.id) return;
    const newDirection = tab.index > currentTab.index ? 1 : -1;
    setDirection(newDirection);
    setCurrentTab(tab);
    window.history.pushState(null, '', tab.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tabId) => {
    const target = navigationTabs.find(t => t.id === tabId);
    if (target) {
      handleSelectTab(target);
    }
  };

  const renderActivePage = () => {
    switch (currentTab.id) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      {/* Odysseus Ambient Background and Canvas Flow */}
      <div className="ambient-bg" />
      <FlowCanvas />

      {/* Static Fixed Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        isMobile={isMobile}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {isMobile ? (
          <MobileSinglePage />
        ) : (
          <PageTransition pageKey={currentTab.id} direction={direction}>
            {renderActivePage()}
          </PageTransition>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
