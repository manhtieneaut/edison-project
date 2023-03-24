import '../pages/EdisonProjectUI/assets/css/base.css';
import '../assets/css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-center container">
                <div className="footer-top">
                    <div className="footer-top--list">
                        <a href="/#" className="headerLogo-link">
                            <img src={require('../assets/images/headerImages/HeaderLogo.png')} alt="FooterLogo" className="footer-logo" />
                        </a>
                        <p>Features that we have which lorem ipsum dolor sit amet, consectetur.</p>
                        <p>Folow us ----</p>
                        <div className="footer__social-list">
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
                    <div className="footer-top--list"></div>
                    <div className="footer-top--list"></div>
                    <div className="footer-top--list"></div>
                </div>
                <div className="footer-bottom"></div>
            </div>
        </footer>
    )
}
export default Footer;