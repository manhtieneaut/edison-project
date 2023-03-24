import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBody from "../components/Product/ProductBody";



const ProductPage = () => {
    return (
        <div className="App">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="./assets/fonts/fontawesome-free-6.3.0-web/css/all.min.css" />
            <Header />
            {/* <ProductBody /> */}
            {/* <Footer /> */}
        </div>
    )
}
export default ProductPage;