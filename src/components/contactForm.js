import React from 'react';

function ContactForm(){
    return (
        <div>
            <section id="about-contact" className="wrapper">
                <div className="contact-box panel"><i className="fas fa-phone"></i><p>0433659968</p></div>
                <div className="contact-box panel"><i className="fas fa-envelope-square"></i><p>leonhsu95@gmail.com</p></div>
                <div className="contact-box panel"><i className="fab fa-github"></i><p>leonhsu95</p></div>
            </section>

            <section id="contact" className="link-section responsive">
                <div className="wrapper">
                    <h2 id="contact-heading" className="section-heading">Contact Me</h2>
                    <form id="contact-form" action="#" method="post" novalidate="" >
                        <fieldset>
                            <p className="formfields">
                                <label for="firstName">First Name:</label>
                                <input type="text" name="firstName" id="firstName" className="text-input" value=""></input>
                            </p>
                            <p className="formfields">
                                <label for="lastName">Last Name:</label>
                                <input type="text" name="lastName" id="lastName" className="text-input" value=""></input>
                                
                            </p>
                            <p className="formfields">
                                <label for="phone">Phone:</label>
                                <input type="text" name="phone" id="phone" className="text-input"></input>
                            </p>
                            <p className="formfields">
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="email" className="text-input" value=""></input>
                            </p>
                            <p className="formcomment">
                                <label for="comment" className="textlabel">Comments:</label>
                                <textarea name="comment" id="comment" rows="6"></textarea>
                            </p>
                            <p className="formsubmit">
                            <input type="submit" name="submit" value="Submit" id="submit"></input>
                            </p>
                        </fieldset>
                    </form>
                </div>     
            </section>
        </div>    
    )
}

export default ContactForm;