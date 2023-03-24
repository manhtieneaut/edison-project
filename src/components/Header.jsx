import '../pages/EdisonProjectUI/assets/css/base.css';
import '../assets/css/header.css';

// Import SVG.
import HeaderSigninIcon from '../assets/images/headerImages/HeaderSigninIcon.svg';
import HeaderCartIcon from '../assets/images/headerImages/HeaderCartIcon.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header-background">
                <div className="header-background-primary"></div>
                <div className="header-background-secondary"></div>
            </div>
            <div className="header-section">
                <div className="header-top">
                    <div className="header-top-block contentPadding">
                        <a href="/#" className="headerLogo-link">
                            <img src={require('../assets/images/headerImages/HeaderLogo.png')} alt="HeaderLogo" />
                        </a>
                        <nav className="navbar">
                            <div className="navItem">
                                <a href="/#">Home</a>
                            </div>
                            <div className="navItem">
                                <a href="/#">Pages</a>
                            </div>
                            <div className="navItem">
                                <a href="/#">About</a>
                            </div>
                            <div className="navItem">
                                <a href="/#">Contact</a>
                            </div>
                        </nav>
                        <div className="header-form">
                            <form action="/#" method="post">
                                <div className="header-form-section">
                                    <input type="text" placeholder="Search" maxlength="256" className="header-search-input" />
                                    <input type="submit" value="" className="header-search-submit" />
                                </div>
                            </form>
                            <a href="/#">
                                <img src={HeaderSigninIcon} alt="Signin-btn"
                                    className="header-signin-btn" />
                            </a>
                            <a href="/#">
                                <img src={HeaderCartIcon} alt="Cart-btn" className="header-cart" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-center">
                    <div className="header-slider contentPadding">
                        <div className="slider-left">
                            <p className="slider-slogan">
                                100% QUALITY - 100% SATISFACTION
                            </p>
                            <p className="slider-title">
                                Classic & Elegent Furniture
                            </p>
                            <p className="slider-content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eos illo expedita
                                dolor
                                delectus mollitia voluptatibus provident quaerat molestias hic voluptates perspiciatis
                                ex?
                                Autem ab, repellat placeat voluptatibus eveniet architecto!
                            </p>
                            <button className="slider-btn">shop now</button>
                        </div>
                        <div className="slider-right">
                            <a href="/#">
                                <img src={require('../assets/images/headerImages/Sofa.png')} alt="Sofa" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-right">
                <div className="header-bottom">
                    <div className="header-bottom-img">
                        <img src={require('../assets/images/headerImages/HeaderAdvertise.jpg')} alt="header-advertise" />
                    </div>
                    <div className="header-bottom-text">
                        <p className="header-text-category">NEW COLLECTIONS</p>
                        <p className="header-text-title">Leisure Chair Set</p>
                        <p className="header-text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                            eius neque, sequi asperiores
                            amet a voluptates. Rem ut soluta atque, explicabo placeat ex vitae voluptatibus quod
                            quisquam id blanditiis cupiditate.</p>
                        <button className="header-text-btn">shop now</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;