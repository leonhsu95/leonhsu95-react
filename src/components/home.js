import React from 'react';
import Banner from './banner';
import AboutMe from './aboutMe';
import Skills from './skills';
import Portfolio from './portfolio';
import ContactForm from './contactForm';

function Home(){
    return(
        <div id="home">
            <header id="header">
                <nav id="header-nav">
                    <div id="logo">
                        <h2><a href="#home"><img id="logo-design" src="assets/designs/leonhsulogo.png" alt="Leon Hsu Logo"></img></a></h2>
                    </div>
                    <ul  className="nav-links">
                        <li><a href="#home" onclick="pageReload()">Home</a></li>
                        <li><a href="#aboutme" onclick="pageReload()">About</a></li>
                        <li><a href="#skills" onclick="pageReload()">Skills</a></li>
                        <li><a href="#portfolio" onclick="pageReload()">Portfolio</a></li>
                        <li><a href="#contact" onclick="pageReload()">Contact</a></li>
                    </ul>
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </header>
            
            <main id="aboutme">
                <Banner/>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
                <ContactForm/>
            </main>
            
            <footer id="footer">
                <nav id="social" className="link-section">
                    <h2><a href="index.html"><img id="footer-logo" src="assets/designs/leonhsulogo.png" alt="Leon Hsu Logo"></img></a></h2>
                    <div className="social-container">
                        <a href="tel:+61433659968"><div className="contact-links"><i className="fas fa-phone"></i></div></a>
                        <a href="mailto:someone@example.com"><div className="contact-links"><i className="fas fa-envelope-square"></i></div></a>
                        <a href="https://github.com/leonhsu95"><div className="contact-links"><i className="fab fa-github"></i></div></a>
                        <a href="https://www.linkedin.com/in/leonhsu95/"><div className="contact-links"><i className="fab fa-linkedin"></i></div></a>
                    </div>
                </nav>
                <small>&copy;2021 Leon Hsu | All Rights Reserved</small>
            </footer> 

        </div>
    )
}

export default Home;