
const Body = () => {



    return (
        <div className="body">
            <h1>Products</h1>
            <div className="bar-item">
                <a href="/#" className="arranger"><i class="fas fa-th"></i></a>
                <a href="/#" className="arranger"><i class="fas fa-bars"></i></a>
            </div>
            <div className="list-item">


                <div className="col">
                    <img className="item-img" src={require('../assets/images/iphone.jpg')} alt="souvenir" />
                    <h3>iphone</h3>
                    <h4>30000$</h4>
                </div>


            </div>
        </div>
    )
}
export default Body;