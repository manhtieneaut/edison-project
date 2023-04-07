import '../assets/sass/base.scss';
import '../assets/sass/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap">
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <a href="/#" className='footer-logo'>
                            <img src={require('../assets/images/headerImages/HeaderLogo.png')} alt="footer-logo" className="footer-img" />
                        </a>
                        <p className="nav-list-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repudiandae.
                        </p>
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
                            <a href="/#">Contact us</a>
                            <a href="/#">Category</a>
                            <a href="/#">Products</a>
                            <a href="/#">Cart</a>
                            <a href="/#">Payment</a>
                        </div>
                    </div>
                </div>
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <h3 className="nav-list-title">Information</h3>
                        <div className="nav-list-link">
                            <a href="/#">Terms & Conditions</a>
                            <a href="/#">Register</a>
                            <a href="/#">Login</a>
                            <a href="/#">Forgot password</a>
                            <a href="/#">Change password</a>
                        </div>
                    </div>
                </div>
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <h3 className="nav-list-title">Contact Us</h3>
                        <h3 className="nav-list-text">+(84) 822206919</h3>
                        <h3 className="nav-list-text">Nguyễn Hồng Quân</h3>
                        <p className="nav-list-text">maiyonaisu1102@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom"></div>
        </footer>
    )
}
export default Footer;