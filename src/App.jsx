import './App.css'; 
import { useState, useEffect } from "react"; 

function App() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);

    function handleToggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    
    function handleToggleModal() {
        setToggleModal(!toggleModal);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClassName = isScrolled ? "scrolled" : "";
    const menuToggleClassName = isMenuOpen ? "active" : "";
    const mobileMenuClassName = isMenuOpen ? "active" : "";

    const modalStyle = toggleModal
        ? {
              display: "block",
              position: "fixed",
              opacity: 1,
              zIndex: 11000,
              left: "50%",
              marginLeft: "-165px",
              top: 100,
          }
        : {
              display: "none",
          };

    const overlayStyle = toggleModal
        ? { display: "block", opacity: "0.6" }
        : { display: "none" };


    return (
        <div className="App">
            
            <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot" />
                    <div className="dots">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>

            <nav id="navbar" className={navClassName}> 
                <div className="nav-container">
                    <div className="logo">My Logo</div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li> 
                        <li><a href="#contact">Contact</a></li> 
                    </ul>
                    
                    <div 
                        className={`mobile-menu-toggle ${menuToggleClassName}`}
                        onClick={handleToggleMenu}
                    >
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                    </div>
                </div>
                
                <div className={`mobile-menu ${mobileMenuClassName}`}>
                    <ul className="mobile-nav-links">
                        <li><a href="#home" onClick={handleToggleMenu}>HOME</a></li>
                        <li><a href="#about" onClick={handleToggleMenu}>ABOUT</a></li>
                        <li><a href="#portfolio" onClick={handleToggleMenu}>PORTFOLIO</a></li>
                        <li><a href="#contact" onClick={handleToggleMenu}>CONTACT</a></li>
                    </ul>
                </div>
            </nav>

            <section id="home" className="hero">
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                    <div className="shape shape-6"></div>
                </div>
                <div className="hero-content">
                    <p className="hero-subtitle">WELCOME</p>
                    <h1>Amazing Products and Creative Solutions.</h1>
                    <p className="subtitle">The fastest and easiest way to develop modern websites using powerful, customizable components.</p>
                    <a id="modal_trigger" href="#modal" onClick={handleToggleModal} className="cta-button">
                        Open Modal (Example)
                    </a>
                </div>
                <div className="scroll-indicator"></div>
            </section>

            <section id="about" className="about">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-image">
                        </div>
                        <div className="about-text">
                            <h3>My story and my skills...</h3>
                            <p>With years of experience in digital transformation, I specialize in crafting user-centric designs that blend aesthetics with functionality. My dedication lies in turning complex problems into clean, engaging solutions.</p>
                            <p>I thrive in collaborative environments, constantly seeking to learn new technologies and apply best practices to every project, ensuring scalable and maintainable results.</p>
                            <div className="skills">
                                <span className="skill-tag">HTML</span>
                                <span className="skill-tag">CSS</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">React.js</span>
                                <span className="skill-tag">UI/UX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="portfolio" style={{padding: '8rem 0', minHeight: '50vh', background: '#f8fafc', textAlign: 'center'}}>
                <h2 className="section-title" style={{marginBottom: '0'}}>Portfolio/Work Section</h2>
            </section>
            <section id="contact" style={{padding: '8rem 0', minHeight: '50vh', background: '#312e81', textAlign: 'center', color: 'white'}}>
                <h2 className="section-title" style={{marginBottom: '0', color: 'white'}} >Contact Section</h2>
            </section>


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
            
            
            <div
                id="lean_overlay"
                style={overlayStyle}
            />
            
            <div
                id="modal"
                className="popupContainer"
                style={modalStyle}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Modal Title</h3>
                        <span className="modal_close" onClick={handleToggleModal}>
                            &times;
                        </span>
                    </div>
                    <div className="modal-body">
                        <p>This is the content of the modal popup.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;