import { Link } from "react-router-dom";

const Template = (prop) => {
    const data = prop.data

    return ( 
        <div className="card-template" >
            {data?.map(item=> (
                <div className="card" key={item.id}>
                    <Link to={`/productDetails/${item.id}`}>
                        <div className="shoeImg-card">
                            <img src={item.item} alt="" />
                        </div>
                    </Link>
                    <h4 className="card-name">{item.name}</h4>
                </div>
            ))}
        </div>
     );
}
 
export default Template
