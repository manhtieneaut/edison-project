import '../assets/sass/base.scss';
import '../assets/sass/header.scss';

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
                            <img src={require('../assets/images/headerImages/HeaderLogo.png')}
                                alt="header-logo" className='header-img' />
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
                                <i class="fa-solid fa-user header-signin-icon"></i>
                            </a>
                            <a href="/#">
                                <i class="fa-solid fa-cart-shopping header-cart-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-center">
                    <div className="header-slider">
                        <div className="slider-left">
                            <p className="slider-left-slogan">
                                100% QUALITY - 100% SATISFACTION
                            </p>
                            <p className="slider-left-title">
                                Modern & Smart Technology Devices
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
                            <a href="/#" className='advertise-aside-wrap'>
                                <img src={require("../assets/images/headerImages/laptopAdvertise.png")}
                                    alt="advertise-aside" className='advertise-aside' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-right">
                <div className="header-bottom">
                    <div className="header-bottom-img">
                        <img src={require('../assets/images/headerImages/header-bottom-image.jpg')}
                            alt="header-bottom-img" className='header-bottom-image' />
                    </div>
                    <div className="header-bWrap">
                        <button className="header-bWrap-btn">shop now</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;