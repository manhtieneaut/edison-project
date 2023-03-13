import ListProduct from "../../../components/Product/listProduct";

const Body = () => {



    return (
        <div className="body">
            <h1>Products</h1>
            <div className="bar-item">
                <a href="/#" className="arranger"><i class="fas fa-th"></i></a>
                <a href="/#" className="arranger"><i class="fas fa-bars"></i></a>
            </div>
            <div className="list-item">
                <ListProduct/>
            </div>
        </div>
    )
}
export default Body;