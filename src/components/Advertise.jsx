import '../assets/sass/base.scss';
import '../assets/sass/advertise.scss';

const Advertise = () => {
    return (
        <>
            <div className="advertise-section">
                <div className="advertise-block">
                    <h2 className='flash-sale-text'>
                        <i class="fa-solid fa-bell flash-sale-icon"></i>
                        Flash sale is going on <span className='flash-sale-stext'>up to 75%</span>
                    </h2>
                    <hr />
                </div>
            </div >
        </>
    )
}
export default Advertise;