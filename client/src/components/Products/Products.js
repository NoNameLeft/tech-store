import Footer from '../Footer/';
import SocialMediaIcons from '../Common/SocialMediaIcons/'
import ProductsIcons from '../Common/ProductsIcons';

import bgImage from '../../images/background-image.png';
import product1 from '../../images/product-1.png';
import product2 from '../../images/product-2.png';
import product3 from '../../images/product-3.png';

const Products = () => {
    return (
        <section className="products">
            <div className="products__bio-image" style={{backgroundImage: 'url('+bgImage+')'}}></div>
            <div className="products__bio">
                <h1 className="text-secondary">Our products</h1>
            </div>
            <div className="products__items">
                <div className="products__items--item">
                    <img src={product1} alt="this is first product" />
                    <ProductsIcons />
                </div>
                <div className="products__items--item">
                    <img src={product2} alt="this is second product" />
                    <ProductsIcons />
                </div>
                <div className="products__items--item">
                    <img src={product3} alt="this is third product" />
                    <ProductsIcons />
                </div>
            </div>

            <SocialMediaIcons />
            <Footer />
        </section>
    );
};

export default Products;