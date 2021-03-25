import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const SocialMediaIcons = () => {
    return (
        <div className="social-icons">
            <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
        </div>
    );
};

export default SocialMediaIcons;