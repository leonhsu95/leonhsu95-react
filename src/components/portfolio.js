import React from 'react';

function Portfolio(){
    return (
        <div>
            <section id="portfolio" className="link-section responsive">
                <div className="wrapper">
                    <h2 className="section-heading wrapper">Portfolio</h2>
                    <p className="subtitle">Press Thumbnail to View Projects. For thumbnails with a Github Icon, press Project Name for Repo</p>

                    <div id="works-square">
                        <div id="project1" className="square-container">
                            <h3><a href="https://github.com/leonhsu95/Projectify">Projectify</a></h3>
                            <div className="works-container">
                                <a href="https://projectify-marketing-app.herokuapp.com/"><img className="square" src="assets/designs/projectify-square.png" alt="Projectify"></img>
                                <div className="overlay">
                                    <div className="works-text">
                                        <p><span className="works-tag1">Team Project</span><br></br><span className="works-tag2">Projectify</span></p>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>

                        <div id="project2" className="square-container">
                            <h3><a href="https://github.com/leonhsu95/ReaCharity">Reacharity</a></h3>
                            <div className="works-container">
                                <a href="https://leonhsu95.github.io/ReaCharity/"><img className="square" src="assets/designs/reacharity-screenshot.png" alt="Reacharity"></img>
                                <div className="overlay">
                                    <div className="works-text">
                                        <p><span className="works-tag1">Team Project</span><br></br><span className="works-tag2">Learning Delights <br></br> Book Club</span></p>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>

                        <div id="project3" className="square-container">
                            <h3>Learning Delights Book Club</h3>
                            <div className="works-container">
                                <a href="https://learningdelights.com.au/"><img className="square" src="assets/designs/learningdelights.png" alt="Learning Delights Book Club"></img>
                                    <div className="overlay">
                                        <div className="works-text"><p><span className="works-tag1">Blogging</span><br></br><span className="works-tag2">Learning Delights <br></br> Book Club</span></p></div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div id="project4" className="square-container">
                            <h3>Sydney Property Valuations</h3>    
                            <div className="works-container">
                                    <a href="https://sydneypropertyvaluations.com.au/"><img className="square" src="assets/designs/sydneysuburbanpropertyvaluations.png" alt="Sydney Suburban Property Valuations"></img>
                                    <div className="overlay">
                                        <div className="works-text"><p><span className="works-tag1">Business Website Redesign</span><br></br><span className="works-tag2">Sydney Suburban Property Valuations</span></p></div>
                                    </div>
                                    </a>
                            </div>
                        </div>

                        <div id="project5" className="square-container">
                            <h3>Sydney Contacts</h3> 
                            <div className="works-container">
                                    <a href="https://sydneycontacts.com.au/"><img className="square" src="assets/designs/sydneycontacts.png" alt="Sydney Contacts"></img>
                                    <div className="overlay">
                                    <div className="works-text"><p><span className="works-tag1">WooCommerce Dropship</span><br></br><span className="works-tag2">Sydney Contacts</span></p></div>
                                    </div>
                                    </a>
                            </div>
                        </div>

                        <div id="project6" className="square-container">
                            <h3>Idol Eyes Australia</h3>       
                            <div className="works-container">
                                <a href="https://idoleyes.com.au/"><img className="square" src="assets/designs/idoleyes.png" alt="Idoleyes Australia"></img>
                                <div className="overlay">
                                    <div className="works-text"><p><span className="works-tag1">WooCommerce Dropship</span><br></br><span className="works-tag2">Idol Eyes Australia</span></p></div>
                                </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>        
    )
}

export default Portfolio;