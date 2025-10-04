import './App.css'; 

function App() {
  return (
    // 2. JSX Structure: Gamitin ang `className` para i-apply ang styles.
    <div className="App">
        {/* Navigation Section */}
        <nav className="scrolled">
            <div className="nav-container">
                <div className="logo">My Logo</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    {/* ... iba pang links ... */}
                </ul>
                <div className="mobile-menu-toggle">
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </div>
            </div>
            {/* Mobile Menu Structure */}
            <div className="mobile-menu">
                <ul className="mobile-nav-links">
                    <li><a href="#home">HOME</a></li>
                    {/* ... */}
                </ul>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
            <div className="floating-shapes">
                {/* Ilagay ang mga shape elements na may class names */}
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                {/* ... iba pang shapes ... */}
            </div>
            <div className="hero-content">
                <p className="hero-subtitle">WELCOME</p>
                <h1>Amazing Products and Creative Solutions.</h1>
                <p className="subtitle">The fastest and easiest way to develop modern websites using powerful, customizable components.</p>
                <a href="#contact" className="cta-button">Get Started Now</a>
            </div>
            <div className="scroll-indicator"></div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        {/* Ang image background ay nasa CSS, ito lang ang div */}
                    </div>
                    <div className="about-text">
                        <h3>My story and my skills...</h3>
                        <p>...</p>
                        <div className="skills">
                            <span className="skill-tag">HTML</span>
                            <span className="skill-tag">CSS</span>
                            {/* ... iba pang tags ... */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <a href="#privacy">Privacy</a>
                    <a href="#terms">Terms</a>
                    <a href="#sitemap">Sitemap</a>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;