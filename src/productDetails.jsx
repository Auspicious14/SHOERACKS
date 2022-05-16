import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProductDetails = () => {
    const {id} = useParams()
    const {data, error, isLoading} = useFetch(`http://localhost:8000/shoe-Items/${id}`)
    return ( 
        <div className="product-details">
            {error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
            {data && <div className="product-details-card">
                <div className="details-img">
                <img src={data.item} alt="" />
                </div>
                <div className="product-name-price">
                <h2>{data.name}</h2>
                <h3>{data.price}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Numquam ab iure itaque quaerat sapiente. <br /> Tempore alias magnam eaque ipsum. Magnam.</p>
                </div>
                </div>}
        </div>
     );
}
 
export default ProductDetails;