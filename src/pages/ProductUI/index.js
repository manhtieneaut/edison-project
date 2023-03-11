import React from "react";
import "./style.css";

const Product = () => {
    return (
        <div className="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <div className="header">
                <div className="header-top">
                    <a className="logo" href="/#"><img src={require('./img/Logo.png')} alt="logo"></img></a>
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
                        <h3>45% MEGA SALE OFFER</h3>
                        <h1>Unique & Stylish Furniture</h1>
                        <p>orem ipsum dolor sit amet, consectetur adipiscing elit quam scelerisque a tincidunt urna. Nisl, quam orci malesuada</p>
                        <button>Shop now</button>
                    </div>
                    <div className="header-image">
                        <img src={require('./img/head-img.png')} alt="img"></img>
                    </div>
                </div>
            </div>
            <div className="items">
                <h1>Products</h1>
                <div className="bar-item">
                   <a href="/#" className="arranger"><i class="fas fa-th"></i></a>
                   <a href="/#" className="arranger"><i class="fas fa-bars"></i></a>
                </div>
                <div className="list">
                    <div className="col">
                        <img className="item-img" src={require('./img/iphone.jpg')} alt="souvenir" />
                        <h3>Iphone</h3>
                        <h4>30000$</h4>
                    </div>
                    <div className="col">
                        <img className="item-img" src={require('./img/iphone.jpg')} alt="souvenir" />
                        <h3>Iphone</h3>
                        <h4>30000$</h4>
                    </div>
                    <div className="col">
                        <img className="item-img" src={require('./img/iphone.jpg')} alt="souvenir" />
                        <h3>Iphone</h3>
                        <h4>30000$</h4>
                    </div>
                    <div className="col">
                        <img className="item-img" src={require('./img/iphone.jpg')} alt="souvenir" />
                        <h3>Iphone</h3>
                        <h4>30000$</h4>
                    </div>
                </div>
            </div>


            <div className="footer">
                <div className="footer-start">
                    <div className="col">
                        <h1>Logo</h1>
                        <p>Features that we have
                            which lorem ipsum dolor
                            sit amet, consectetur</p>
                        <p>Follow us</p>
                        <p>icon</p>
                    </div>
                    <div className="col">
                        <h1>Company</h1>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Our Blog Post</p>
                        <p>Contact</p>
                        <p>Login</p>
                        <p>Resister</p>
                        <p>Shop</p>
                    </div>
                    <div className="col">
                        <h1>Information</h1>
                        <p>Terms & Conditions</p>
                        <p>Style Guide</p>
                        <p>Changelog</p>
                        <p>Licenses</p>
                    </div>
                    <div className="col">
                        <h1>Contact Us</h1>
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

export default Product;