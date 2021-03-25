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
                <h2 className="text-secondary">Laptops</h2>
                <h3>Apple</h3>
                <h3>Samsung</h3>
                <h6>and many more...</h6>
                <p>You will find the best laptops in our shop.</p>
            </div>
            <div className="products__product">
                <h2 className="text-secondary">Personal computers</h2>
                <h3>Razer</h3>
                <h3>IBM</h3>
                <h6>and many more...</h6>
                <p>We offer some nice PC configurations.</p>
            </div>
            <div className="products__product">
                <h2 className="text-secondary">Smartphones</h2>
                <h3>Apple</h3>
                <h3>Samsung</h3>
                <h6>and many more...</h6>
                <p>Most populars phones on the market are here in our shop.</p>
            </div>
        </div>

        <SocialMediaIcons />

        <Footer />
    </section>
    );
};

export default About;