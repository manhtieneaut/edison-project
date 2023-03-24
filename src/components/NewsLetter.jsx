import '../pages/EdisonProjectUI/assets/css/base.css';
import '../assets/css/newsletter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <div className="newsletter-section">
                <div className="newsletter-center">
                    <div className="newsletter-content">
                        <div className="newsletter-title">
                            <p>Subscribe our Newsletter</p>
                        </div>
                        <div className="newsletter-submit">
                            <form action="#" method="get" className="newsletter-submit-block">
                                <input type="text" placeholder="Enter your email here" className="newsletter-submit-input" />
                                <button className="newsletter-submit-button">
                                    <FontAwesomeIcon icon={solid("arrow-right")} className="newsletter-submit-icon" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <img src={require('../assets/images/NewsLetterImages/newsletter-section.png')} alt="newsletter" className="newsletter-img" />
            </div>
        </div>
    )
}
export default NewsLetter;