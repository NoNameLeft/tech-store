import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle, faShoppingCart } from '@fortawesome/fontawesome-free-solid'

const ProductsIcons = () => {
    return (
        <div className="products__btns">
            <Link to="#" className="products__btns--btn"><FontAwesomeIcon icon={faInfoCircle} />Details</Link>
            <Link to="#" className="products__btns--btn"><FontAwesomeIcon icon={faShoppingCart} />Buy</Link>
        </div>
    );
};

export default ProductsIcons;