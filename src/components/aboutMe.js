import React from 'react';

function AboutMe(){
    return (
        <section id="intro" className="link-section flex-container responsive">
            <div id="section-container" >
                <div className="section-left">
                  <h1 className="section-heading">Aspiring Full Stack Web Developer in Sydney, Australia</h1>
                  <p>
                    I work with businesses, startups and freelance projects to develop websites and design creative assets that pushes businesses up 
                    in SEO and Marketing. Websites are customised, robust and responsive to client satisfaction. 
                  </p>
                  <a className="call-to-action" href="#portfolio">See My Projects</a>
                  <a className="call-to-action" href="https://drive.google.com/file/d/1ycKHQihYNFCjDp7wXDuF2hj7c1NxJhNB/view?usp=sharing">Resume</a>
                </div>
                <div id="creativity-banner-scroll" className="picture-scroll section-right"></div>
            </div>
        </section>       
    )
}

export default AboutMe;