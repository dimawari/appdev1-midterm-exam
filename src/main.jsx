import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

const rootVariables = {
    '--primary-color': '#6366f1',
    '--secondary-color': '#8b5cf6',
    '--accent-color': '#f59e0b',
    '--accent-pink': '#ec4899',
    '--accent-cyan': '#06b6d4',
    '--text-primary': '#0f172a',
    '--text-secondary': '#64748b',
    '--text-light': '#ffffff',
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f8fafc',
    '--bg-dark': '#0f172a',
    '--bg-card': 'rgba(255, 255, 255, 0.95)',
    '--gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    '--gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    '--gradient-tertiary': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    '--gradient-elegant': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '--shadow-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '--glass': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': 'rgba(255, 255, 255, 0.2)',
};

const styles = {
    // Global reset using a utility class or function in a real app
    global: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    body: {
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        lineHeight: 1.7,
        color: 'var(--text-primary)', // Assumes CSS variables are available
        scrollBehavior: 'smooth',
        overflowX: 'hidden',
        background: 'var(--bg-primary)',
    },

    // --- Footer Styles ---
    footer: {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #312e81 100%)',
        color: 'var(--text-light)',
        padding: '3rem 0 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        // NOTE: ::before and ::after pseudo-elements need CSS-in-JS or a regular CSS file
    },
    
    // NOTE: footer::before pseudo-element styles:
    /*
    footerBefore: {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"footer-grid\" width=\"12\" height=\"12\" patternUnits=\"userSpaceOnUse\"><path d=\"M 12 0 L 0 0 0 12\" fill=\"none\" stroke=\"rgba(255,255,255,0.05)\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23footer-grid)\"/></svg>')",
        opacity: 0.4,
    },
    */

    // NOTE: footer::after pseudo-element styles:
    /*
    footerAfter: {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
    },
    */

    footerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        position: 'relative',
        zIndex: 2,
    },

    footerLeftP: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem',
        margin: 0,
    },

    footerRight: {
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
    },

    footerRightA: {
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
        position: 'relative',
        // NOTE: :hover and ::after pseudo-elements need CSS-in-JS or a regular CSS file
    },

    // --- Navigation Styles ---
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
        boxShadow: 'var(--shadow-lg)',
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
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        fontSize: '1.75rem',
        fontWeight: 700,
        background: 'var(--gradient-elegant)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.5px',
    },

    navLinks: {
        display: 'flex',
        listStyle: 'none',
        gap: '2.5rem',
        alignItems: 'center',
    },

    navLinksA: {
        textDecoration: 'none',
        color: 'var(--text-primary)',
        fontWeight: 500,
        fontSize: '0.95rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        padding: '0.5rem 0',
        // NOTE: :hover and ::after pseudo-elements need CSS-in-JS or a regular CSS file
    },

    // --- Mobile Menu Styles ---
    mobileMenuToggle: {
        display: 'none', // This needs to be handled via media query/conditional rendering in a real app
        flexDirection: 'column',
        cursor: 'pointer',
        padding: '0.5rem',
        zIndex: 1001,
    },

    hamburger: {
        width: '25px',
        height: '3px',
        background: 'var(--text-primary)',
        margin: '3px 0',
        transition: 'all 0.3s ease',
        borderRadius: '1px',
        // NOTE: transforms for .active state need to be applied conditionally in JSX
    },

    mobileMenu: {
        position: 'fixed',
        top: 0,
        right: '-100%', // Needs conditional class/style update for active state
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
    },
    
    mobileMenuDefaultActive: {
        right: '0', // For .mobile-menu.active
    },
    
    mobileNavLinks: {
        listStyle: 'none',
        textAlign: 'center',
    },

    mobileNavLinksLi: {
        margin: '2rem 0',
        opacity: 0, // Needs conditional class/style update for active state
        transform: 'translateY(30px)', // Needs conditional class/style update for active state
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        // NOTE: nth-child transitions need logic in JSX or CSS-in-JS
    },

    mobileNavLinksA: {
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        fontSize: '2.5rem',
        fontWeight: 500,
        color: 'var(--text-light)',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        background: 'var(--gradient-elegant)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        // NOTE: :hover styles need logic in JSX
    },

    // --- Hero Section Styles ---
    hero: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-elegant)',
        position: 'relative',
        overflow: 'hidden',
        // NOTE: ::before and ::after pseudo-elements need CSS-in-JS or a regular CSS file
    },

    // NOTE: Animations need CSS files or CSS-in-JS to be fully functional.
    /*
    keyframesFloat: { 
        '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
        '50%': { transform: 'translateY(-20px) rotate(1deg)' },
    },
    keyframesPulse: { 
        '0%': { opacity: 0.5 },
        '100%': { opacity: 0.8 },
    },
    keyframesFadeInUp: {
        to: { opacity: 1, transform: 'translateY(0)' },
    },
    */

    floatingShapes: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
    },

    shape: {
        position: 'absolute',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        // NOTE: Animations for individual shapes need CSS files or CSS-in-JS
    },

    shape1: { // .shape-1
        width: '80px',
        height: '80px',
        top: '20%',
        left: '10%',
        // animation: 'floatShape1 20s ease-in-out infinite',
    },

    shape2: { // .shape-2
        width: '120px',
        height: '120px',
        top: '60%',
        right: '15%',
        background: 'rgba(255, 255, 255, 0.08)',
        // animation: 'floatShape2 25s ease-in-out infinite reverse',
    },
    // ... shapes 3-6 follow the same pattern

    heroContent: {
        textAlign: 'center',
        color: 'var(--text-light)',
        zIndex: 2,
        position: 'relative',
        maxWidth: '900px',
        padding: '0 2rem',
    },

    heroSubtitle: {
        fontSize: '1.1rem',
        fontWeight: 500,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        opacity: 0, // Needs animation
        transform: 'translateY(30px)', // Needs animation
        // animation: 'fadeInUp 1s ease 0.2s forwards',
        marginBottom: '1rem',
        color: 'rgba(255, 255, 255, 0.8)',
    },

    heroH1: {
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        fontSize: '5rem',
        fontWeight: 700,
        marginBottom: '1.5rem',
        opacity: 0, // Needs animation
        transform: 'translateY(30px)', // Needs animation
        // animation: 'fadeInUp 1s ease 0.4s forwards',
        lineHeight: 1.1,
        letterSpacing: '-1px',
    },

    heroSubtitleP: { // .hero .subtitle
        fontSize: '1.3rem',
        marginBottom: '3rem',
        opacity: 0, // Needs animation
        transform: 'translateY(30px)', // Needs animation
        // animation: 'fadeInUp 1s ease 0.6s forwards',
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 400,
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    ctaButton: {
        display: 'inline-block',
        padding: '1.2rem 3rem',
        background: 'rgba(255, 255, 255, 0.2)',
        color: 'var(--text-light)',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: 600,
        fontSize: '1rem',
        transform: 'translateY(30px)', // Needs animation
        opacity: 0, // Needs animation
        // animation: 'fadeInUp 1s ease 0.8s forwards',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        letterSpacing: '0.5px',
        // NOTE: :hover styles need logic in JSX
    },

    scrollIndicator: {
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '30px',
        height: '50px',
        border: '2px solid rgba(255, 255, 255, 0.6)',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        // NOTE: :hover and ::before pseudo-elements/animations need CSS-in-JS or a regular CSS file
    },

    // --- Section Styles ---
    section: {
        padding: '8rem 0',
    },

    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
    },

    sectionTitle: {
        textAlign: 'center',
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        fontSize: '3.5rem',
        fontWeight: 600,
        marginBottom: '4rem',
        background: 'var(--gradient-elegant)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-1px',
        position: 'relative',
        // NOTE: ::after pseudo-element needs CSS-in-JS or a regular CSS file
    },

    // --- About Section ---
    about: {
        background: 'var(--bg-secondary)',
        position: 'relative',
        // NOTE: ::before pseudo-element needs CSS-in-JS or a regular CSS file
    },

    aboutContent: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gap: '6rem',
        alignItems: 'center',
        position: 'relative',
        // NOTE: Responsive styles from media query need special handling
    },

    aboutImage: {
        width: '100%',
        height: '500px',
        background: "url('images/smiling-girl-computer-desktop.jpg') center/cover",
        borderRadius: '30px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-2xl)',
        transform: 'rotate(-2deg)',
        transition: 'transform 0.4s ease',
        // NOTE: :hover and ::before pseudo-elements need CSS-in-JS or a regular CSS file
    },

    aboutTextH3: {
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'var(--text-primary)',
        fontWeight: 500,
        lineHeight: 1.3,
    },

    aboutTextP: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        lineHeight: 1.8,
    },

    skills: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        marginTop: '3rem',
    },

    skillTag: {
        padding: '0.75rem 1.5rem',
        background: 'var(--bg-card)',
        color: 'var(--primary-color)',
        borderRadius: '30px',
        fontSize: '0.9rem',
        fontWeight: 600,
        border: '1px solid rgba(99, 102, 241, 0.2)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        // NOTE: :hover styles need logic in JSX
    },

    // --- Portfolio Section ---
    portfolio: {
        background: 'var(--bg-primary)',
    },

    portfolioGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3rem',
        marginTop: '2rem',
        // NOTE: Responsive styles from media query need special handling
    },

    portfolioItem: {
        background: 'var(--bg-card)',
        borderRadius: '25px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: 'translateY(20px)', // Needs animation/conditional class
        opacity: 0, // Needs animation/conditional class
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        // NOTE: .animate and :hover styles need logic in JSX
    },

    portfolioImage: {
        width: '100%',
        height: '180px',
        background: 'var(--gradient-primary)', // Default/Fallback
        position: 'relative',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // NOTE: Background images for nth-child selectors need to be handled by dynamic component props
        // NOTE: ::before pseudo-element needs CSS-in-JS or a regular CSS file
    },

    portfolioContent: {
        padding: '2rem',
    },

    portfolioContentH4: {
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: 'var(--text-primary)',
        fontWeight: 600,
    },

    portfolioContentP: {
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        lineHeight: 1.7,
    },

    portfolioTech: {
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
    },

    techTag: {
        padding: '0.4rem 1rem',
        background: 'var(--bg-secondary)',
        color: 'var(--text-secondary)',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        // NOTE: :hover styles need logic in JSX
    },

    // --- Contact Section ---
    contact: {
        background: 'linear-gradient(135deg, #3b4cb8 0%, #4a2c65 50%, #9c35a8 100%)',
        color: 'var(--text-light)',
        position: 'relative',
        overflow: 'hidden',
        // NOTE: ::before and ::after pseudo-elements/animations need CSS-in-JS or a regular CSS file
    },

    contactFloatingShapes: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
    },

    contactShape: {
        position: 'absolute',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '50%',
        // NOTE: Animations for individual shapes need CSS files or CSS-in-JS
    },

    contactShape1: { // .contact-shape-1
        width: '70px',
        height: '70px',
        top: '15%',
        left: '8%',
        // animation: 'contactFloatShape1 24s ease-in-out infinite',
    },
    // ... contact shapes 2-6 follow the same pattern

    contactContent: {
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
    },

    contactSectionTitle: { // .contact .section-title
        color: 'var(--text-light)',
        background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },

    contactForm: {
        display: 'grid',
        gap: '2rem',
        marginTop: '3rem',
    },

    formRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        // NOTE: Responsive styles from media query need special handling
    },
};

// Ang code na ito ay maaari mong gamitin sa iyong React component, halimbawa:
/*
function Footer() {
    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={styles.footerContent}>
                    <div style={styles.footerLeftP}>
                        <p style={styles.footerLeftP}>Copyright © 2023. All rights reserved.</p>
                    </div>
                    // ... iba pang elements
                </div>
            </div>
        </footer>
    );
}

// O, mas mainam, gumamit ng CSS-in-JS library tulad ng Styled Components o Emotion 
// para mas madaling ma-handle ang pseudo-elements at media queries.
*/