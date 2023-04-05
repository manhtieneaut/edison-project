import '../assets/sass/base.scss';
import '../assets/sass/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap">
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <a href="/#">
                            <img src={require('../assets/images/headerImages/HeaderLogo.png')} alt="HeaderLogo" className="footerLogo" />
                        </a>
                        <p className="nav-list-text">Features that we have which lorem ipsum dolor sit amet,
                            consectetur.</p>
                        <h3 className="nav-list-title follow-title">Folow us</h3>
                        <div className="social-link">
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
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <h3 className="nav-list-title">Company</h3>
                        <div className="nav-list-link">
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
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <h3 className="nav-list-title">Information</h3>
                        <div className="nav-list-link">
                            <a href="/#">Terms & Conditions</a>
                            <a href="/#">Style Guide</a>
                            <a href="/#">Changelog</a>
                            <a href="/#">Licenses</a>
                        </div>
                    </div>
                </div>
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <h3 className="nav-list-title">Contact Us</h3>
                        <p className="nav-list-text">256, Central City, Borlex House Main town, New York, USA</p>
                        <h3 className="nav-list-title">+880(12) 125 48765</h3>
                        <p className="nav-list-text">www.examples.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom"></div>
        </footer>
    )
}
export default Footer;