import useFetch from "./useFetch";

const ShowcaseProducts = () => {
    const {data, error, isLoading} = useFetch("http://localhost:8000/Category")
    console.log(data)

    
    return (
        <div className="overall-template">
            <h2 className="featured" >Women's Product</h2>
            <div className="card-template">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && data.slice(data.length - 8).filter(value => value.category === "Women").map(filteredData => (
                    <div className="card" key={filteredData.id}>
                         <div className="shoeImg-card">
                            <img src={filteredData.item} alt="" />
                            {console.log(filteredData.item)}
                        </div>
                        <h4 className="card-name">{filteredData.name}</h4>
                    </div>
            ))}
        </div>

        <h2 className="featured kid">Kid's Products</h2>
        <div className="card-template">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && data.slice(data.length - 8).filter(value => value.category === "Kid") .map(filteredData => (
                    <div className="card" key={filteredData.id}>
                         <div className="shoeImg-card">
                            <img src={filteredData.item} alt="" />
                            {console.log(filteredData.item)}
                        </div>
                        <h4 className="card-name">{filteredData.name}</h4>
                    </div>
            ))}
        </div>
        </div>
     );
}
 
export default ShowcaseProducts;

