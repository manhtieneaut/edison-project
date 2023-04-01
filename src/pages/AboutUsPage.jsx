import Header from "../components/Header";
import AboutUs from "../components/AboutUs/AboutUs";
import Brand from '../components/Brand';
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const AboutUsPage = () => {
    return (
        <div className="container">
            <Header></Header>
            <AboutUs></AboutUs>
            <Brand></Brand>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    )
}
export default AboutUsPage;