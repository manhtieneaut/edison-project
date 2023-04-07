
const SortFilter = ({onFilter}) => {

    const sortOption = ["home-decoration", "smartphones", "laptops", "fragrances", "skincare", "groceries"];

    const handleFilter = (value) => {
        onFilter(value);
      };

    return (
        <div className='sort'>
            <h1>Sort,filter by category</h1>
            <div className='sort-by'>
                <select onChange={(e) => handleFilter(e.target.value)}>
                    <option>Please select value</option>
                    {sortOption.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>
            
        </div>
    )
}
export default SortFilter;