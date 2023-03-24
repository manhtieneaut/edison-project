import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer-Tien";

import ProductBody from "../components/Product/ProductBody";



const ProductPage = () => {
    return (
        <div className="App">
            <Header />
            <ProductBody />
            <NewsLetter />
            <Footer />
        </div>
    )
}
export default ProductPage;