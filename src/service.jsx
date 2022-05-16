import Template from "./template"
import useFetch from "./useFetch"

const Service = () => {
	const { data, error, isLoading } = useFetch(
		"http://localhost:8000/shoe-Items",
	)

	const handleClick = (currentCategory) => {
		const filteredData = data.filter(
			(value) => value.category === currentCategory,
		)
		return filteredData
	}

	return (
		<div className="overall-service">
			<div className="featured-btn">
                {/* {console.log(handleClick('Men'))} */}
				<button onClick={() => handleClick("Men")}>Men</button>
				<button onClick={() => handleClick("Women")}>Women</button>
				<button onClick={() => handleClick("Kid")}>Kids</button>
			</div>
			<div className="services">
				{error && <div>{error}</div>}
				{isLoading && <div>Loading...</div>}
				{data && <Template data={data} />}
			</div>
		</div>
	)
}

export default Service
