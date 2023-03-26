// import Pagination from "./Pagination";
import ProductList from "./ProductList";
const ProductBody = () => {
    return (
        <div className="body">
            <h1>Products</h1>
            <div className="bar-item">
                <a href="/#" className="arranger"><i class="fas fa-th"></i></a>
                <a href="/#" className="arranger"><i class="fas fa-bars"></i></a>
            </div>
            <div className="list-item">
                <ProductList />
            </div>
        </div>
    )
}
export default ProductBody;