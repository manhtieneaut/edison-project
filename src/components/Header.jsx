import '../assets/sass/base.scss';
import '../assets/sass/header.scss';

// Import SVG.
import HeaderSigninIcon from '../assets/images/headerImages/headerSigninIcon.svg';
import HeaderCartIcon from '../assets/images/headerImages/headerCartIcon.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header-background">
                <div className="header-background-primary"></div>
                <div className="header-background-secondary"></div>
            </div>
            <div className="header-section">
                <div className="header-top">
                    <div className="header-top-wrap contentPadding">
                        <a href="/#" className="header-logo">
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
                        <div className="header-top-form">
                            <form action="/#" method="post" className='header-top-form-block'>
                                <div className="header-top-form-wrap">
                                    <input type="text" placeholder="Search" maxlength="256" className="header-search-input" />
                                    <input type="submit" value="" className="header-search-submit" />
                                </div>
                            </form>
                            <a href="/#">
                                <img src={HeaderSigninIcon} alt="Signin-btn"
                                    className="header-signin-btn" />
                            </a>
                            <a href="/#">
                                <img src={HeaderCartIcon} alt="Cart-btn" className="header-cart-btn" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-center">
                    <div className="header-slider contentPadding">
                        <div className="slider-left">
                            <p className="slider-left-slogan">
                                100% QUALITY - 100% SATISFACTION
                            </p>
                            <p className="slider-left-title">
                                Classic & Elegent Furniture
                            </p>
                            <p className="slider-left-text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eos illo expedita
                                dolor
                                delectus mollitia voluptatibus provident quaerat molestias hic voluptates perspiciatis
                                ex?
                                Autem ab, repellat placeat voluptatibus eveniet architecto!
                            </p>
                            <button className="slider-left-btn">shop now</button>
                        </div>
                        <div className="slider-right">
                            <a href="/#">
                                <img src={require('../assets/images/headerImages/Sofa.png')} alt="sofa" />
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
                    <div className="header-bWrap">
                        <p className="header-bWrap-category">NEW COLLECTIONS</p>
                        <p className="header-bWrap-title">Leisure Chair Set</p>
                        <p className="header-bWrap-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                            eius neque, sequi asperiores
                            amet a voluptates. Rem ut soluta atque, explicabo placeat ex vitae voluptatibus quod
                            quisquam id blanditiis cupiditate.</p>
                        <button className="header-bWrap-btn">shop now</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;