import Footer from '../Footer';
import SocialMediaIcons from '../Common/SocialMediaIcons/'

import bgImage from '../../images/background-image.png';

const About = () => {
    return (
    <section className="about">
        <div className="about__bio-image" style={{backgroundImage: `url(${bgImage})`}}></div>
        <div className="about__bio">
            <h2 className="text-secondary">About us</h2>
            <p>We sell cool tech stuff on affordable prices.</p>
        </div>

        <div className="products">
            <div className="products__product">
                <img className="products__product--img" src="https://www.w3schools.com/w3images/team1.jpg" alt="some girl"></img>
                <h2 className="text-secondary">CEO & Founder</h2>
                <h3>Jane Doe</h3>
                <p><small><em style={{color: '#F6EFC4'}}>'We sell the best laptops money can buy!'</em></small></p>
                <h6><em>jane.doe@example.com</em></h6>
                <button type="button" className="contactBtn">Contact me!</button>
            </div>
            <div className="products__product">
                <img className="products__product--img" src="https://www.w3schools.com/w3images/team2.jpg" alt="some guy"></img>
                <h2 className="text-secondary">Sales Director</h2>
                <h3>Joe Doe</h3>
                <p><small><em style={{color: '#F6EFC4'}}>'We offer the best custom PC configurations!'</em></small></p>
                <h6><em>joe.doe@example.com</em></h6>
                <button type="button" className="contactBtn">Contact me!</button>
            </div>
            <div className="products__product">
                <img className="products__product--img" src="https://www.w3schools.com/w3images/team3.jpg" alt="some old guy"></img>
                <h2 className="text-secondary">Marketing expert</h2>
                <h3>Mike Ross</h3>
                <p><small><em style={{color: '#F6EFC4'}}>'You will find most popular phones here only!'</em></small></p>
                <h6><em>mike.ross@example.com</em></h6>
                <button type="button" className="contactBtn">Contact me!</button>
            </div>
        </div>

        <SocialMediaIcons />

        <Footer />
    </section>
    );
};

export default About;