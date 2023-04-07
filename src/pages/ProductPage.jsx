import Advertise from "../components/Advertise";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

import ProductBody from "../components/Product/ProductBody";

const ProductPage = () => {
    return (
        <div className="App">
            <Advertise></Advertise>
            <Header></Header>
            <ProductBody></ProductBody>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    )
}
export default ProductPage;