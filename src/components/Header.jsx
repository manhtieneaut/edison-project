
const Header = () => {
    return (
        <div className="header">
            <div className="header-top">
                <a className="logo" href="/#"><img src={require('../assets/images/logo.png')} alt="logo"></img></a>
                <div className="nav-bar">
                    <a href="/#">Home</a>
                    <a href="/#">Pages</a>
                    <a href="/#">About</a>
                    <a href="/#">Contact</a>
                </div>
                <div className="search">
                    <input placeholder="Search" />
                    <button><i class="fas fa-search"></i></button>
                </div>
                <div className="account"><a href="/#"><i class="far fa-user"></i></a></div>
                <div className="cart"><a href="/#"><i class="fas fa-shopping-cart"></i></a></div>
            </div>
            <div className="header-end">
                <div className="header-content">
                    <h3>45% MEGA SALE OFFER</h3>
                    <h1>Unique & Stylish Furniture</h1>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit quam scelerisque a tincidunt urna. Nisl, quam orci malesuada</p>
                    <button>Shop now</button>
                </div>
                <div className="header-image">
                    <img src={require('../assets/images/head-img.png')} alt="img"></img>
                </div>
            </div>
        </div>
    )
}
export default Header;