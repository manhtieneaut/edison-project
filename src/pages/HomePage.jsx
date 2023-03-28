import "../assets/css/base.css";
import "../assets/css/style.css";

import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div className="container">
            <Header></Header>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    )
}
export default HomePage;