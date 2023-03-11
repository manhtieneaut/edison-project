import React from "react";
import "./style.css"


const About = () => {
    return (
        <div className="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

            <div className="header">
                <div className="header-top">
                    <a className="logo" href="/#"><img src={require('./images/logo.png')} alt="logo"></img></a>
                    <div className="nav-bar">
                        <a href="/#">Home</a>
                        <a href="/#">Pages</a>
                        <a href="/#">About</a>
                        <a href="/#">Contact</a>
                    </div>
                    <div className="search">
                        <input placeholder="Search" />
                        <button><i class="fas fa-search"></i></button>
                    </div>
                    <div className="account"><a href="/#"><i class="far fa-user"></i></a></div>
                    <div className="cart"><a href="/#"><i class="fas fa-shopping-cart"></i></a></div>
                </div>
                <div className="header-end">
                    <div className="header-content">
                        <h1>About Farnic</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing scelerisque a tincidunt urna nisl quam orci males</p>
                    </div>
                    <div className="header-image">
                        <img src={require('./images/header-image.png')} alt="img"></img>
                    </div>
                </div>
            </div>

            <div className="welcome">
                <div className="left">
                    <img src={require('./images/welcome.png')} alt="welcome"></img>
                </div>
                <div className="right">
                    <h1>Welcome to Farnic</h1>
                    <h5>Provide best quality  of Furniture and we always focus on quality, technology and try to make our customer happy</h5>
                    <p>Furniture best dolor sit amet, consectetur adipiscing elit. Duis lectus mauris, ullamcorper mauris amet, erat amet. Ornare vitae cursus phar purus. Ut enim sed id consectetur velit ullamcorper a. Tellus, tempus erdiet dui amet bibendum amet, vestibulum. Sed morbi viverra sit  tempor tristique sit. Donec vitae lacu</p>
                    <p>Furniture best dolor sit amet, consectetur adipiscing elit. Duis lectus mauris, ullamcorper mauris amet, erat amet. Ornare vitae cursus phar purus. Ut enim sed id consectetur velit ullamcorper</p>
                </div>
            </div>

            <div className="best">
                <div className="left">
                    <h1>Why We are the Best?</h1>
                    <p>Features that we have which Lorem ipsum dolor sit amet, consectetur convallis. Arcu, egestas nec scelerisque mi. Augue proin</p>
                    <div className="cart">
                        <div className="cart-left">
                            <img src={require('./images/best.jpg')} alt="best"></img>
                        </div>
                        <div className="cart-right">
                            <h3 className="cart-title">Free Shipping</h3>
                            <p className="cart-content">Buy product over $100 and get free home delivery offer</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-left">
                            <img src={require('./images/best.jpg')} alt="best"></img>
                        </div>
                        <div className="cart-right">
                            <h3 className="cart-title">Easy Return Policy</h3>
                            <p className="cart-content">Provide 30 day easy Return policy for all of our customer</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-left">
                            <img src={require('./images/best.jpg')} alt="best"></img>
                        </div>
                        <div className="cart-right">
                            <h3 className="cart-title">Secure Payment</h3>
                            <p className="cart-content">We conform you that payment system are totally secure</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-left">
                            <img src={require('./images/best.jpg')} alt="best"></img>
                        </div>
                        <div className="cart-right">
                            <h3 className="cart-title">Best Quality</h3>
                            <p className="cart-content">We never compromize about our quality and always concern</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={require('./images/best.jpg')} alt="best"></img>
                </div>
            </div>

            <div className="customer">
                <div className="title">
                    <h1>Happy Customers Review</h1>
                    <p>Features that we have which Lorem ipsum dolor sit amet, consectetur convallis.
                    </p>
                    <p> Arcu, egestas nec scelerisque mi. Augue proin</p>
                </div>
                <div className="item">
                    <div className="image-cus">
                        <img src={require('./images/cus1.png')} alt="cus"></img>
                        <h4 className="cart-title">Ramoses Galario</h4>
                        <p className="cart-content">Sydney, Australia</p>
                    </div>
                    <div className="content-cus">
                        <p>Furniture best dolor sit amet, consectetur adipiscing elit. Duis ectus mauris, ullamcorper mauris amet, erat amet. Ornare vitae cursus tra purus. Ut enim sed id consectetur velit ullamcorper tempus</p>
                    </div>
                </div>
            </div>

            <div className="product">
                <div className="item-product"><a href="/#"><img src={require('./images/product-image.png')} alt="pro"></img></a></div>
                <div className="item-product"><a href="/#"><img src={require('./images/product-image1.png')} alt="pro"></img></a></div>
                <div className="item-product"><a href="/#"><img src={require('./images/product-image2.png')} alt="pro"></img></a></div>
                <div className="item-product"><a href="/#"><img src={require('./images/product-image3.png')} alt="pro"></img></a></div>
                <div className="item-product"><a href="/#"><img src={require('./images/product-image4.png')} alt="pro"></img></a></div>
            </div>

            <div className="subcribe">
                <div className="title"><h1>Subscribe our Newsletter</h1></div>
                <div className="require">
                    <div className="email">
                        <input placeholder="Enter your email hear" />
                        <button type="submit"><i class="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-start">
                    <div className="col">
                        <h3>Logo</h3>
                        <p>Features that we have
                            which lorem ipsum dolor
                            sit amet, consectetur</p>
                        <p>Follow us</p>
                        <p>icon</p>
                    </div>
                    <div className="col">
                        <h3>Company</h3>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Our Blog Post</p>
                        <p>Contact</p>
                        <p>Login</p>
                        <p>Resister</p>
                        <p>Shop</p>
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p>Terms & Conditions</p>
                        <p>Style Guide</p>
                        <p>Changelog</p>
                        <p>Licenses</p>
                    </div>
                    <div className="col">
                        <h3>Contact Us</h3>
                        <p>256, Central City, Borlex House Main town, New York, USA</p>
                        <p>+880(12) 125 48765</p>
                        <p>www.examples.com</p>
                    </div>
                </div>
                <div className="footer-end">
                    <p>
                        © 2022 design and developed by Brandbes. Powered by Webflow.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;