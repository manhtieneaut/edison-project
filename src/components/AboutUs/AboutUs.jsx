import "../../assets/sass/about.scss";

import promoItem1 from '../../assets/images/aboutImages/aboutPromo/promoItem1.svg';
import promoItem2 from '../../assets/images/aboutImages/aboutPromo/promoItem2.svg';
import promoItem3 from '../../assets/images/aboutImages/aboutPromo/promoItem3.svg';
import promoItem4 from '../../assets/images/aboutImages/aboutPromo/promoItem4.svg';
const AboutUsBody = () => {
    return (
        <div className="content">
            <div className="welcome-section contentPadding">
                <div className="welcome-left">
                    <img src={require('../../assets/images/aboutImages/aboutDiscount.png')} alt="aboutDiscount"
                        className="aboutDiscount" />
                </div>
                <div className="welcome-right">
                    <div className="welcome-right-section">
                        <h3 className="welcome-right-title">
                            Welcome to Farnic
                        </h3>
                        <p className="welcome-right-stext">
                            Provide best quality of Furniture and we always focus on quality, technology and try to make
                            our customer happy
                        </p>
                        <p className="welcome-right-text">
                            Furniture best dolor sit amet, consectetur adipiscing elit. Duis lectus mauris, ullamcorper
                            mauris amet, erat amet. Ornare vitae cursus phar purus. Ut enim sed id consectetur velit
                            ullamcorper a. Tellus, tempus erdiet dui amet bibendum amet, vestibulum. Sed morbi viverra
                            sit tempor tristique sit. Donec vitae lacu
                        </p>
                        <p className="welcome-right-text">
                            Furniture best dolor sit amet, consectetur adipiscing elit. Duis lectus mauris, ullamcorper
                            mauris amet, erat amet. Ornare vitae cursus phar purus. Ut enim sed id consectetur velit
                            ullamcorper
                        </p>
                    </div>
                </div>
            </div>
            <div className="funfact-section contentPadding">
                <div className="funfact-item">
                    <h2 className="funfact-title">20k+</h2>
                    <p className="funfact-text">Properties</p>
                </div>
                <div className="funfact-item">
                    <h2 className="funfact-title">12k+</h2>
                    <p className="funfact-text">Customers</p>
                </div>
                <div className="funfact-item">
                    <h2 className="funfact-title">62+</h2>
                    <p className="funfact-text">Agents</p>
                </div>
                <div className="funfact-item">
                    <h2 className="funfact-title">160+</h2>
                    <p className="funfact-text">Awards Win</p>
                </div>
            </div>
            <div className="promo-section">
                <div className="promo-left">
                    <div className="promo-desc">
                        <h2 className="promo-left-title">Why We are the Best?</h2>
                        <p className="promo-left-desc">Features that we have which Lorem ipsum dolor sit amet, consectetur
                            convallis. Arcu, egestas nec scelerisque mi. Augue proin</p>
                    </div>
                    <div className="promo-items">
                        <div className="promo-item">
                            <img src={promoItem1} alt="promoIcon1"
                                className="promo-icon" />
                            <div className="promo-item-text">
                                <h3 className="promo-item-title">Free Shipping</h3>
                                <p className="promo-item-desc">Buy product over $100 and get free home delivery offer</p>
                            </div>
                        </div>
                        <div className="promo-item">
                            <img src={promoItem2} alt="promoIcon2"
                                className="promo-icon" />
                            <div className="promo-item-text">
                                <h3 className="promo-item-title">Easy Return Policy</h3>
                                <p className="promo-item-desc">Provide 30 day easy Return policy for all of our customer</p>
                            </div>
                        </div>
                        <div className="promo-item">
                            <img src={promoItem3} alt="promoIcon3"
                                className="promo-icon" />
                            <div className="promo-item-text">
                                <h3 className="promo-item-title">Secure Payment</h3>
                                <p className="promo-item-desc">We conform you that payment system are totally secure</p>
                            </div>
                        </div>
                        <div className="promo-item">
                            <img src={promoItem4} alt="promoIcon4"
                                className="promo-icon" />
                            <div className="promo-item-text">
                                <h3 className="promo-item-title">Best Quality</h3>
                                <p className="promo-item-desc">We never compromize about our quality and always concern</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="promo-right">
                    <div className="promo-image">
                        <img src={require('../../assets/images/aboutImages/aboutPromo.jpg')} alt="aboutPromo" className="aboutPromo" />
                    </div>
                    <div className="promo-content">
                        <h5 className="promo-advertise">MEGA SALE
                            <span className="promo-advertise-emphasis">UPTO 75%</span>
                        </h5>
                        <h3 className="promo-title">Fancy Sofa set</h3>
                        <p className="promo-text">
                            Lorem ipsum dolor sit amet, consectetur scelerisque a tincidunt urna quam
                        </p>
                        <button className="promo-btn">shop now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUsBody;