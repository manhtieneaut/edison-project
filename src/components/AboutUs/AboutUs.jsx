import "./style.css";
const About = () => {
    return (
        <div className="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <div className="welcome">
                <div className="left">
                    <img src={require('../../assets/images/welcome.png')} alt="welcome"></img>
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
                            <img src={require('../../assets/images/best.jpg')} alt="best"></img>
                        </div>
                        <div className="cart-right">
                            <h3 className="cart-title">Free Shipping</h3>
                            <p className="cart-content">Buy product over $100 and get free home delivery offer</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-left">
                            <img src={require('../../assets/images/best.jpg')} alt="best"></img>
                        </div>
                        <div className="cart-right">
                            <h3 className="cart-title">Easy Return Policy</h3>
                            <p className="cart-content">Provide 30 day easy Return policy for all of our customer</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-left">
                            <img src={require('../../assets/images/best.jpg')} alt="best"></img>
                        </div>
                        <div className="cart-right">
                            <h3 className="cart-title">Secure Payment</h3>
                            <p className="cart-content">We conform you that payment system are totally secure</p>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-left">
                            <img src={require('../../assets/images/best.jpg')} alt="best"></img>
                        </div>
                        <div className="cart-right">
                            <h3 className="cart-title">Best Quality</h3>
                            <p className="cart-content">We never compromize about our quality and always concern</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={require('../../assets/images/best.jpg')} alt="best"></img>
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
                        <img src={require('../../assets/images/cus1.png')} alt="cus"></img>
                        <h4 className="cart-title">Ramoses Galario</h4>
                        <p className="cart-content">Sydney, Australia</p>
                    </div>
                    <div className="content-cus">
                        <p>Furniture best dolor sit amet, consectetur adipiscing elit. Duis ectus mauris, ullamcorper mauris amet, erat amet. Ornare vitae cursus tra purus. Ut enim sed id consectetur velit ullamcorper tempus</p>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="item-product"><a href="/#"><img src={require('../../assets/images/product-image.png')} alt="pro"></img></a></div>
                <div className="item-product"><a href="/#"><img src={require('../../assets/images/product-image1.png')} alt="pro"></img></a></div>
                <div className="item-product"><a href="/#"><img src={require('../../assets/images/product-image2.png')} alt="pro"></img></a></div>
                <div className="item-product"><a href="/#"><img src={require('../../assets/images/product-image3.png')} alt="pro"></img></a></div>
                <div className="item-product"><a href="/#"><img src={require('../../assets/images/product-image4.png')} alt="pro"></img></a></div>
            </div>
        </div>
    )
}
export default About;