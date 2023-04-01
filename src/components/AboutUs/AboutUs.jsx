import WelcomeComponent from './Welcome';
import FunFactComponent from './FunFact';
import PromoComponent from './Promo';

const AboutUsBody = () => {
    return (
        <div className="content">
            <WelcomeComponent></WelcomeComponent>
            <FunFactComponent></FunFactComponent>
            <PromoComponent></PromoComponent>
        </div>
    )
}
export default AboutUsBody;