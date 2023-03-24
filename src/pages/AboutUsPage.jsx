import "../assets/css/base.css";
import "../assets/css/style.css";

import Header from "../components/Header";
import Footer from "../components/Footer-Tien";
import ProductBody from "../components/Product/ProductBody";
import AboutUsBody from "../components/AboutUs/AboutUs";

const ProductPage = () => {
    return (
        <div className="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <AboutUsBody />
        </div>
    )
}
export default ProductPage;