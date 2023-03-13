import React from "react";
import "./assets/css/style.css";
import "./assets/css/base.css"

import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

const Product = () => {
    return (
        <div className="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Product;