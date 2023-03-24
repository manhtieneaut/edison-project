import '../pages/EdisonProjectUI/assets/css/base.css';
import '../assets/css/footer.css';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-center container">
                <div class="footer-top">
                    <div class="footer-top--list" style="width:25%;">
                        <a href="/#" class="headerLogo-link">
                            <img src={require('../assets/images/headerImages/HeaderLogo.png')} alt="FooterLogo" style="display: block" />
                        </a>
                        <p>Features that we have which lorem ipsum dolor sit amet, consectetur.</p>
                        <p>Folow us ----</p>
                        <div class="footer__social-list" style="font-size: 18px">
                            <a href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-behance"></i>
                            </a>
                        </div>
                    </div>
                    <div class="footer-top--list"></div>
                    <div class="footer-top--list"></div>
                    <div class="footer-top--list"></div>
                </div>
                <div class="footer-bottom"></div>
            </div>
        </footer>
    )
}
export default Footer;