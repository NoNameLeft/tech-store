import { useHistory } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Footer from '../Footer/';
import SocialMediaIcons from '../Common/SocialMediaIcons/'

import bgImgStyle from '../Common/BackgroundImgStyle'
import product1 from '../../images/product-1.png';
import product2 from '../../images/product-2.png';
import product3 from '../../images/product-3.png';

const Home = () => {
    const history = useHistory();

    const routeChange = (e) =>{
        console.log(e.target.id);
        let path = `/products`; 
        history.push(path);
    }
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

                <h2 style={{margin: '1.5rem'}}>
                    <em>Our</em> <span style={{color: '#FF652F'}}><em>Bestsellers</em></span>
                </h2>

                <div className="slider">
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={product1} onClick={routeChange} id="1" className="sliderImg" alt="some product1" />
                        <img src={product2} className="sliderImg" alt="some product2" />
                        <img src={product3} className="sliderImg" alt="some product3" />
                    </AliceCarousel>
                </div>

                <SocialMediaIcons />
                <Footer />
            </section>
        </main>
    );
};

export default Home;