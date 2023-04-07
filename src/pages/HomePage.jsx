import Advertise from "../components/Common/Advertise";
import Header from "../components/Common/Header";
import NewsLetter from "../components/Common/NewsLetter";
import ProductBody from "../components/Product/ProductBody";
import Brand from '../components/Common/Brand';
import Footer from "../components/Common/Footer";
import Copyright from "../components/Common/Copyright";

const HomePage = () => {
    return (
        <>
            <Advertise></Advertise>
            <Header></Header>
            <ProductBody></ProductBody>
            <Brand></Brand>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
            <Copyright></Copyright>
        </>
    )
}
export default HomePage;