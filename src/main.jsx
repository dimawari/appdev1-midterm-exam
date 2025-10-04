import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // 👈 IMPORTANTE: Dito namin kukunin ang lahat ng styling!

// =======================================================================
// APP COMPONENT
// =======================================================================

function App() {
    // State para sa Mobile Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State para sa Scrolled Navigation
    const [isScrolled, setIsScrolled] = useState(false);

    // Handler para i-toggle ang menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Handler para i-close ang menu kapag nag-click sa link
    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
        // Add scroll animation logic if needed here
    };

    // Scroll Listener Logic (Nav Scrolled)
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
    
    // Class names for conditional styling
    const navClassName = isScrolled ? "scrolled" : "";
    const menuClassName = isMenuOpen ? "active" : "";

    return (
        <React.Fragment>

            {/* Navigation Bar */}
            <nav id="navbar" className={navClassName}>
                <div className="nav-container">
                    <div className="logo">Personal Shape</div>
                    {/* Desktop Links (Hidden sa mobile via CSS) */}
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                    {/* Mobile Menu Toggle/Hamburger */}
                    <div 
                        className={`mobile-menu-toggle ${menuClassName}`}
                        id="mobileMenuToggle"
                        onClick={toggleMenu}
                    >
                        {/* Hamburger lines (CSS ang mag-a-animate sa kanila) */}
                        <div className="hamburger" />
                        <div className="hamburger" />
                        <div className="hamburger" />
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu Content (Active state controlled by className) */}
            <div className={`mobile-menu ${menuClassName}`} id="mobileMenu">
                <ul className="mobile-nav-links">
                    <li><a href="#home" onClick={handleNavLinkClick}>Home</a></li>
                    <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
                    <li><a href="#portfolio" onClick={handleNavLinkClick}>Portfolio</a></li>
                    <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
                </ul>
            </div>
            
            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="floating-shapes">
                    <div className="shape shape-1" />
                    <div className="shape shape-2" />
                    <div className="shape shape-3" />
                    <div className="shape shape-4" />
                    <div className="shape shape-5" />
                    <div className="shape shape-6" />
                </div>
                <div className="hero-content">
                    <div className="hero-subtitle">Creative Designer</div>
                    <h1>Transforming Ideas Into Beautiful Experiences</h1>
                    <p className="subtitle">
                        I craft digital experiences that captivate, engage, and inspire through
                        thoughtful design and innovative solutions
                    </p>
                    <a href="#portfolio" className="cta-button">
                        Explore My Work
                    </a>
                </div>
                {/* JSX onClick event */}
                <div
                    className="scroll-indicator"
                    onClick={scrollToAbout} 
                />
            </section>
            
            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <h2 className="section-title fade-in">About Me</h2>
                    <div className="about-content">
                        <div className="about-image slide-in-left" />
                        <div className="about-text slide-in-right">
                            <h3>Passionate about creating meaningful digital experiences</h3>
                            <p>
                                With over 5 years of experience in digital design, I specialize in
                                creating user-centered solutions that bridge the gap between
                                functionality and aesthetics. My approach combines strategic
                                thinking with creative execution to deliver impactful results.
                            </p>
                            <p>
                                I believe that great design is not just about how it looks, but how
                                it works and how it makes people feel. Every project is an
                                opportunity to solve problems and create connections that matter.
                            </p>
                            <p>
                                When I'm not designing, you'll find me exploring new technologies,
                                sketching ideas, or seeking inspiration in nature and architecture.
                            </p>
                            <div className="skills">
                                <span className="skill-tag">UI/UX Design</span>
                                <span className="skill-tag">Web Development</span>
                                <span className="skill-tag">Brand Identity</span>
                                <span className="skill-tag">Motion Graphics</span>
                                <span className="skill-tag">Prototyping</span>
                                <span className="skill-tag">Design Systems</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <h2 className="section-title fade-in">Featured Work</h2>
                    <div className="portfolio-grid">
                        <div className="portfolio-item">
                            <div className="portfolio-image" />
                            <div className="portfolio-content">
                                <h4>E-commerce Platform</h4>
                                <p>A modern, responsive e-commerce solution with focus on user experience and conversion optimization. Built with scalability and performance in mind.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Node.js</span>
                                    <span className="tech-tag">MongoDB</span>
                                    <span className="tech-tag">Stripe</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image" />
                            <div className="portfolio-content">
                                <h4>Brand Identity System</h4>
                                <p>Complete visual identity redesign for a tech startup, including logo, guidelines, and digital assets. Creating a cohesive brand experience across all touchpoints.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">Illustrator</span>
                                    <span className="tech-tag">Photoshop</span>
                                    <span className="tech-tag">Figma</span>
                                    <span className="tech-tag">After Effects</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image" />
                            <div className="portfolio-content">
                                <h4>Mobile App Design</h4>
                                <p>Intuitive mobile app interface for a fitness tracking application with focus on accessibility and user engagement through gamification.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">Figma</span>
                                    <span className="tech-tag">Principle</span>
                                    <span className="tech-tag">React Native</span>
                                    <span className="tech-tag">Lottie</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image" />
                            <div className="portfolio-content">
                                <h4>Dashboard Interface</h4>
                                <p>Clean and functional dashboard design for data analytics platform with complex information architecture and real-time data visualization.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">Vue.js</span>
                                    <span className="tech-tag">D3.js</span>
                                    <span className="tech-tag">SCSS</span>
                                    <span className="tech-tag">Chart.js</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image" />
                            <div className="portfolio-content">
                                <h4>Marketing Website</h4>
                                <p>Modern marketing website with interactive animations and optimized conversion funnels. Built for maximum performance and SEO.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">Next.js</span>
                                    <span className="tech-tag">Framer Motion</span>
                                    <span className="tech-tag">Tailwind CSS</span>
                                    <span className="tech-tag">Vercel</span>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image" />
                            <div className="portfolio-content">
                                <h4>Creative Portfolio</h4>
                                <p>Artistic portfolio website featuring immersive galleries, smooth transitions, and creative storytelling for a digital artist.</p>
                                <div className="portfolio-tech">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Three.js</span>
                                    <span className="tech-tag">GSAP</span>
                                    <span className="tech-tag">WebGL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="contact-floating-shapes">
                    <div className="contact-shape contact-shape-1" />
                    <div className="contact-shape contact-shape-2" />
                    <div className="contact-shape contact-shape-3" />
                    <div className="contact-shape contact-shape-4" />
                    <div className="contact-shape contact-shape-5" />
                    <div className="contact-shape contact-shape-6" />
                </div>
                <div className="container">
                    <div className="contact-content">
                        <h2 className="section-title fade-in">Let's Work Together</h2>
                        <p className="fade-in">
                            Ready to bring your vision to life? Let's discuss how we can create
                            something amazing together. I'm always excited to take on new
                            challenges and collaborate on innovative projects.
                        </p>
                        <form className="contact-form fade-in">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    required
                                    defaultValue={""}
                                />
                            </div>
                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-left">
                            <p>© 2025 Personal Shape. All rights reserved.</p>
                        </div>
                        <div className="footer-right">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Use</a>
                            <a href="#sitemap">Sitemap</a>
                            <a
                                href="https://templatemo.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Provided by TemplateMo
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

// =======================================================================
// RENDER THE APP
// =======================================================================

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Pwede mo rin palitan ang App.jsx ang pangalan ng file na ito, basta tama ang path
// na ginagamit sa index.html at ang import sa taas.