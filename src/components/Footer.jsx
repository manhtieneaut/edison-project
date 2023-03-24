import '../pages/EdisonProjectUI/assets/css/base.css';
import '../assets/css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contentPadding">
                <div className="footerTop">
                    <div className="navList">
                        <div className="navList-wrap">
                            <a href="/#">
                                <img src={require('../assets/images/headerImages/HeaderLogo.png')} alt="HeaderLogo" className="footerLogo" />
                            </a>
                            <p className="navList-text">Features that we have which lorem ipsum dolor sit amet,
                                consectetur.</p>
                            <h3 className="navList-title navList-followTitle">Folow us</h3>
                            <div className="socialLink">
                                <a href="/#">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="/#">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="/#">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="/#">
                                    <i className="fa-brands fa-behance"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navList">
                        <div className="navList-wrap">
                            <h3 className="navList-title">Company</h3>
                            <div className="navList-link">
                                <a href="/#">Home</a>
                                <a href="/#">About us</a>
                                <a href="/#">Our blog post</a>
                                <a href="/#">Contact</a>
                                <a href="/#">Login</a>
                                <a href="/#">Register</a>
                                <a href="/#">Shop</a>
                            </div>
                        </div>
                    </div>
                    <div className="navList">
                        <div className="navList-wrap">
                            <h3 className="navList-title">Information</h3>
                            <div className="navList-link">
                                <a href="/#">Terms & Conditions</a>
                                <a href="/#">Style Guide</a>
                                <a href="/#">Changelog</a>
                                <a href="/#">Licenses</a>
                            </div>
                        </div>
                    </div>
                    <div className="navList">
                        <div className="navList-wrap">
                            <h3 className="navList-title">Contact Us</h3>
                            <p className="navList-text">256, Central City, Borlex House Main town, New York, USA</p>
                            <h3 className="navList-title">+880(12) 125 48765</h3>
                            <p className="navList-text">www.examples.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"></div>
            </div>
        </footer>
    )
}
export default Footer;