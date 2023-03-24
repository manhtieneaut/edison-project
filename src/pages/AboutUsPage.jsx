import "../assets/css/base.css";
import "../assets/css/style.css";

import Header from "../components/Header";
import AboutUsBody from "../components/AboutUs/AboutUs";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const AboutUsPage = () => {
    return (
        <div className="container">
            <Header></Header>
            <AboutUsBody />
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    )
}
export default AboutUsPage;