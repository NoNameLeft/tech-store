import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMobileAlt, faAddressCard } from '@fortawesome/fontawesome-free-solid'

import Footer from '../Footer';
import SocialMediaIcons from '../Common/SocialMediaIcons/'

import bgImgStyle from '../Common/BackgroundImgStyle'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="contact" style={bgImgStyle}>
                    <h2>Contact Us</h2>

                    <div className="contact__list">
                        <div className="contact__email">
                            <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />Email
                            <div className="text-secondary">
                                test@email.com
                            </div>
                        </div>
                        <div className="contact__phone">
                        <FontAwesomeIcon className="contactIcon" icon={faMobileAlt} />Phone
                            <div className="text-secondary">
                                +359 885 238 421
                            </div>
                        </div>
                        <div className="contact__address">
                        <FontAwesomeIcon className="contactIcon" icon={faAddressCard} />Address
                            <div className="text-secondary">
                                123 First St. New York City, NY
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <SocialMediaIcons />
                </section>
                <Footer />
                <div className="container">
                    <form action="#">
              
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
              
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
              
                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}}></textarea>
              
                        <input type="submit" value="Submit" />
              
                    </form>
                </div>
            </React.Fragment>
        );
    }
};

export default Contact;