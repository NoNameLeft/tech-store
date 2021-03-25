import Footer from '../Footer/';
import SocialMediaIcons from '../Common/SocialMediaIcons/'

import bgImgStyle from '../Common/BackgroundImgStyle'

const Home = () => {
    console.log(bgImgStyle);
    return (
        <main>
            <section className="home" style={bgImgStyle}>
                <div className="home__image"></div>
                <h2>Welcome Everyone! This Is</h2>
                <h1 className="home__name">
                    Top <span className="home__name--last">Tech</span>
                </h1>
                <h2 className="home__moto">
                    Electronic Device & All Things Nice.
                </h2>

                <SocialMediaIcons />

                <Footer />
            </section>
        </main>
    );
};

export default Home;