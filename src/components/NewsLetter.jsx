import '../pages/EdisonProjectUI/assets/css/base.css';
import '../assets/css/newsletter.css';

const NewsLetter = () => {
    return (
        <div class="newsletter">
            <div class="newsletter-section">
                <div class="newsletter-center">
                    <div class="newsletter-content">
                        <div class="newsletter-title">
                            <p>Subscribe our Newsletter</p>
                        </div>
                        <div class="newsletter-submit">
                            <form action="#" method="get" class="newsletter-submit-block">
                                <input type="text" placeholder="Enter your email here" class="newsletter-submit-input" />
                                <button class="newsletter-submit-button">
                                    <i class="fa-solid fa-arrow-right newsletter-submit-icon"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <img src={require('../assets/images/NewsLetterImages/newsletter-section.png')} alt="newsletter-section" class="newsletter-img" />
            </div>
        </div>
    )
}
export default NewsLetter;