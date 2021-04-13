import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faAddressCard, faBuilding, faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover } from '@fortawesome/free-brands-svg-icons';

const Checkout = () => {
    return (
        <div className="coutwrap">
            <div className="row">
            <div className="col-75">
                <div className="box">
                    <form action="#">

                        <div className="row">
                            <div className ="col-50">
                                <h3>Billing Address</h3>
                                <label htmlFor="fname"> <FontAwesomeIcon icon={faUser} /> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                <label htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} /> Email</label>
                                <input type="text" id="email" name="email" placeholder="john@example.com" />
                                <label htmlFor="adr"> <FontAwesomeIcon icon={faAddressCard} /> Address</label>
                                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                <label htmlFor="city"> <FontAwesomeIcon icon={faBuilding} /> City</label>
                                <input type="text" id="city" name="city" placeholder="New York" />
                            
                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="state">State</label>
                                        <input type="text" id="state" name="state" placeholder="NY" />
                                    </div>
                                    <div className="col-50">
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder="10001" />
                                    </div>
                                </div>
                
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-50">
                            <h3>Payment</h3>
                            <label htmlFor="fname">Accepted Cards</label>
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faCcVisa} style={{color: "navy"}} />
                                <FontAwesomeIcon icon={faCcAmex} style={{color: "blue"}} />
                                <FontAwesomeIcon icon={faCcMastercard} style={{color: "red"}} />
                                <FontAwesomeIcon icon={faCcDiscover} style={{color: "orange"}} />
                            </div>
                            <label htmlFor="cname">Name on Card</label>
                            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                            <label htmlFor="ccnum">Credit card number</label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                            <label htmlFor="expmonth">Exp Month</label>
                            <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                            
                            <div className="row">
                                <div className="col-50">
                                    <label htmlFor="expyear">Exp Year</label>
                                    <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                </div>
                                <div className="col-50">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="231" />
                                </div>
                            </div>
                        </div>
                        </div>
                        

                        <label>
                        <input type="checkbox" name="sameadr" /> Shipping address same as billing
                        </label>
                        <input type="submit" value="Continue to checkout" className="btn" />
                        
                    </form>
                </div>
            </div>

            <div className="col-25">
                <div className="box">
                    <h4>Cart <span className="price" style={{color: "#FF652F"}}> <FontAwesomeIcon icon={faShoppingCart} /> <b>4</b></span></h4>
                    <p><Link to="#">Product 1</Link> <span className="price">$15</span></p>
                    <p><Link to="#">Product 2</Link> <span className="price">$5</span></p>
                    <p><Link to="#">Product 3</Link> <span className="price">$8</span></p>
                    <p><Link to="#">Product 4</Link> <span className="price">$2</span></p>
                    <hr />
                    <p>Total <span className="price" style={{color: "#FF652F"}}><b>$30</b></span></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Checkout;