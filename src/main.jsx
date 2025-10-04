import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// NOTE: Dahil gusto mong maging iisang file lang, 
// inalis ang external imports tulad ng './App.jsx', './index.css', './App.css'.
// Ang styles ay gagamitin na lang na inline styles.

// =======================================================================
// 1. STYLES (Ginawang JavaScript Object para sa Inline Styling)
// =======================================================================

const styles = {
    // --- Global Variables (CSS Custom Properties) ---
    rootVariables: {
        '--primary-color': '#6366f1',
        '--text-light': '#ffffff',
        '--bg-primary': '#ffffff',
        '--bg-secondary': '#f8fafc',
        '--text-primary': '#0f172a',
        '--text-secondary': '#64748b',
        '--gradient-elegant': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '--shadow-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '--bg-card': 'rgba(255, 255, 255, 0.95)',
        // ... iba pang variables
    },
    
    // NOTE: Para magamit ang CSS variables tulad ng 'var(--primary-color)', 
    // kailangan ito ng base CSS file (o dynamic style injection sa <style> tag). 
    // Para simple, gagamit muna tayo ng hardcoded values o dynamic styles na walang var().

    // --- Base & Utility Styles ---
    globalBody: {
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        lineHeight: 1.7,
        color: '#0f172a', // text-primary
        scrollBehavior: 'smooth',
        overflowX: 'hidden',
        background: '#ffffff', // bg-primary
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    // --- Navigation Styles (Partial) ---
    nav: {
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },

    navScrolled: {
        background: 'rgba(255, 255, 255, 0.98)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
        padding: '0.75rem 0',
    },

    navContainer: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo: {
        fontSize: '1.75rem',
        fontWeight: 700,
        // Kailangan ng external CSS para sa background-clip: text at transparent color
        // For now, gagamit ng solid color
        color: '#6366f1', 
        letterSpacing: '-0.5px',
    },
    
    // ... iba pang styles (nav-links, hero, footer, atbp.) na hindi kinaya i-define sa iisang file 
    // dahil sa pseudo-elements at media queries.

    // --- Mobile Menu Toggle (JSX Conditional Style) ---
    mobileMenuToggle: {
        display: 'none', // Dapat may media query para lumabas
        flexDirection: 'column',
        cursor: 'pointer',
        padding: '0.5rem',
        zIndex: 1001,
    },
    hamburger: {
        width: '25px',
        height: '3px',
        background: '#0f172a', // text-primary
        margin: '3px 0',
        transition: 'all 0.3s ease',
        borderRadius: '1px',
    },
    mobileMenu: (isOpen) => ({
        position: 'fixed',
        top: 0,
        right: isOpen ? '0' : '-100%',
        width: '100%',
        height: '100vh',
        background: 'rgba(15, 23, 42, 0.98)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 999,
    }),
    mobileNavLinks: {
        listStyle: 'none',
        textAlign: 'center',
        padding: 0,
    },
    mobileNavLinkA: {
        fontSize: '2.5rem',
        fontWeight: 500,
        color: '#ffffff', // text-light
        textDecoration: 'none',
        display: 'block',
        padding: '15px 0',
    }
};


// =======================================================================
// 2. APP COMPONENT (Pinagsamang HTML Structure)
// =======================================================================

function App() {
    // State para sa Mobile Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State para sa Scrolled Navigation
    const [isScrolled, setIsScrolled] = useState(false);

    // Handler para i-toggle ang menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Handler para i-close ang menu kapag nag-click sa link
    const handleNavLinkClick = () => setIsMenuOpen(false);

    // useEffect para sa Scroll Listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Custom function para sa scroll-indicator click
    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };
    
    // Combined Nav Style based on scroll state
    const navStyle = {
        ...styles.nav,
        ...(isScrolled ? styles.navScrolled : {}),
    };

    return (
        <React.Fragment>
            {/* HTML Body equivalent style: Kailangan ng actual CSS file para ma-apply ito sa <body> */}
            {/* Sa React, ang body styles ay karaniwang nasa index.css */}

            {/* Navigation Bar */}
            <nav id="navbar" style={navStyle}>
                <div style={styles.navContainer}>
                    <div className="logo" style={styles.logo}>Personal Shape</div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                    {/* Mobile Menu Toggle */}
                    <div 
                        className="mobile-menu-toggle" 
                        id="mobileMenuToggle"
                        style={{...styles.mobileMenuToggle, display: 'flex'}} // In-overwrite ang display: none
                        onClick={toggleMenu}
                    >
                        {/* Hamburger lines: Kailangan ng conditional styles para sa X animation */}
                        <div className="hamburger" style={styles.hamburger} />
                        <div className="hamburger" style={styles.hamburger} />
                        <div className="hamburger" style={styles.hamburger} />
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu Content */}
            <div className="mobile-menu" id="mobileMenu" style={styles.mobileMenu(isMenuOpen)}>
                <ul className="mobile-nav-links" style={styles.mobileNavLinks}>
                    <li><a href="#home" style={styles.mobileNavLinkA} onClick={handleNavLinkClick}>Home</a></li>
                    <li><a href="#about" style={styles.mobileNavLinkA} onClick={handleNavLinkClick}>About</a></li>
                    <li><a href="#portfolio" style={styles.mobileNavLinkA} onClick={handleNavLinkClick}>Portfolio</a></li>
                    <li><a href="#contact" style={styles.mobileNavLinkA} onClick={handleNavLinkClick}>Contact</a></li>
                </ul>
            </div>
            
            {/* Hero Section */}
            <section id="home" className="hero" style={{...styles.section, ...styles.hero}}>
                <div className="floating-shapes">
                    <div className="shape shape-1" style={styles.shape1} />
                    {/* ... other shapes (2-6) ... */}
                </div>
                <div className="hero-content" style={styles.heroContent}>
                    <div className="hero-subtitle" style={styles.heroSubtitle}>Creative Designer</div>
                    <h1 style={styles.heroH1}>Transforming Ideas Into Beautiful Experiences</h1>
                    <p className="subtitle" style={styles.heroSubtitleP}>
                        I craft digital experiences that captivate, engage, and inspire through
                        thoughtful design and innovative solutions
                    </p>
                    <a href="#portfolio" className="cta-button" style={styles.ctaButton}>
                        Explore My Work
                    </a>
                </div>
                {/* JSX onclick event is now a React onClick prop */}
                <div
                    className="scroll-indicator"
                    onClick={scrollToAbout} 
                    style={styles.scrollIndicator}
                />
            </section>
            
            {/* About Section */}
            <section id="about" className="about" style={{...styles.section, ...styles.about}}>
                <div className="container" style={styles.container}>
                    <h2 className="section-title fade-in" style={styles.sectionTitle}>About Me</h2>
                    <div className="about-content" style={styles.aboutContent}>
                        <div className="about-image slide-in-left" style={styles.aboutImage} />
                        <div className="about-text slide-in-right">
                            <h3 style={styles.aboutTextH3}>Passionate about creating meaningful digital experiences</h3>
                            {/* ... more text paragraphs ... */}
                            <div className="skills" style={styles.skills}>
                                <span className="skill-tag" style={styles.skillTag}>UI/UX Design</span>
                                <span className="skill-tag" style={styles.skillTag}>Web Development</span>
                                {/* ... other skill tags ... */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio" style={{...styles.section, ...styles.portfolio}}>
                <div className="container" style={styles.container}>
                    <h2 className="section-title fade-in" style={styles.sectionTitle}>Featured Work</h2>
                    <div className="portfolio-grid" style={styles.portfolioGrid}>
                        {/* Portfolio Items - Kailangan gawing component ito sa mas malaking app */}
                        <div className="portfolio-item" style={styles.portfolioItem}>
                             <div className="portfolio-image" style={{...styles.portfolioImage, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}} />
                            <div className="portfolio-content" style={styles.portfolioContent}>
                                <h4 style={styles.portfolioContentH4}>E-commerce Platform</h4>
                                <p style={styles.portfolioContentP}>A modern, responsive e-commerce solution...</p>
                                <div className="portfolio-tech" style={styles.portfolioTech}>
                                    <span className="tech-tag" style={styles.techTag}>React</span>
                                    {/* ... more tech tags ... */}
                                </div>
                            </div>
                        </div>
                        {/* ... iba pang portfolio items ... */}
                    </div>
                </div>
            </section>
            
            {/* Contact Section */}
            <section id="contact" className="contact" style={{...styles.section, ...styles.contact}}>
                <div className="container" style={styles.container}>
                    <div className="contact-content" style={styles.contactContent}>
                        <h2 className="section-title fade-in" style={{...styles.sectionTitle, ...styles.contactSectionTitle}}>Let's Work Together</h2>
                        <p className="fade-in">
                            Ready to bring your vision to life? Let's discuss how we can create something amazing together.
                        </p>
                        
                        {/* Contact Form: Kailangan ng form handling logic */}
                        <form className="contact-form fade-in" style={styles.contactForm}>
                             {/* ... form fields and button ... */}
                        </form>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="footer" style={styles.footer}>
                <div className="container" style={styles.container}>
                    <div className="footer-content" style={styles.footerContent}>
                        <div className="footer-left">
                            <p style={styles.footerLeftP}>© 2025 Personal Shape. All rights reserved.</p>
                        </div>
                        <div className="footer-right" style={styles.footerRight}>
                            <a href="#privacy" style={styles.footerRightA}>Privacy Policy</a>
                            {/* ... iba pang links ... */}
                        </div>
                    </div>
                </div>
            </footer>
            
        </React.Fragment>
    );
}


// =======================================================================
// 3. RENDER THE APP
// =======================================================================

const root = ReactDOM.createRoot(document.getElementById('root'));

// I-inject natin ang body style (simpleng paraan, sa totoong app, nasa CSS file ito)
Object.assign(document.body.style, styles.globalBody); 
// NOTE: Ang ibang styles na gumagamit ng 'var(--...)' ay hindi gagana maliban kung i-inject din 
// ang CSS variables sa <style> tag o sa document.documentElement.style.

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);