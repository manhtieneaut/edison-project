import "../../assets/sass/base.scss";
import "../../assets/sass/about.scss";

const WelcomeComponent = () => {
    return (
        <div className="welcome-section contentPadding">
            <div className="welcome-left">
                <img src={require('../../assets/images/aboutImages/aboutDiscount.png')} alt="aboutDiscount"
                    className="aboutDiscount" />
            </div>
            <div className="welcome-right">
                <div className="welcome-right-section">
                    <h3 className="welcome-right-title">
                        Welcome to Farnic
                    </h3>
                    <p className="welcome-right-stext">
                        Provide best quality of Furniture and we always focus on quality, technology and try to make
                        our customer happy
                    </p>
                    <p className="welcome-right-text">
                        Furniture best dolor sit amet, consectetur adipiscing elit. Duis lectus mauris, ullamcorper
                        mauris amet, erat amet. Ornare vitae cursus phar purus. Ut enim sed id consectetur velit
                        ullamcorper a. Tellus, tempus erdiet dui amet bibendum amet, vestibulum. Sed morbi viverra
                        sit tempor tristique sit. Donec vitae lacu
                    </p>
                    <p className="welcome-right-text">
                        Furniture best dolor sit amet, consectetur adipiscing elit. Duis lectus mauris, ullamcorper
                        mauris amet, erat amet. Ornare vitae cursus phar purus. Ut enim sed id consectetur velit
                        ullamcorper
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent;