import '../assets/sass/base.scss';
import '../assets/sass/brand.scss';

const BrandComponent = () => {
    return (
        <div className="brand-block">
            <div class="brand-wrap">
                <div class="brand-items">
                    <div class="brand-item">
                        <img src={require('../assets/images/sliderImages/slider1.png')} alt="slider1" />
                    </div>
                    <div class="brand-item">
                        <img src={require('../assets/images/sliderImages/slider2.png')} alt="slider2" />
                    </div>
                    <div class="brand-item">
                        <img src={require('../assets/images/sliderImages/slider3.png')} alt="slider3" />
                    </div>
                    <div class="brand-item">
                        <img src={require('../assets/images/sliderImages/slider4.png')} alt="slider4" />
                    </div>
                    <div class="brand-item">
                        <img src={require('../assets/images/sliderImages/slider5.png')} alt="slider5" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BrandComponent;