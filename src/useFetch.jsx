import { useEffect, useState } from "react"

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (res.status !== 200) {
					throw new Error(`The error was a ${res.status} error`)
				}
				return res.json()
			})
			.then((data) => {
				console.log(data)
                setIsLoading(false)
				setData(data)
                setError(null)
			})
			.catch((err) => {
				console.log(err.message)
                setIsLoading(false)
				setError(err.message)
			})
	}, [url])
	return { data, error, isLoading }
}
export default useFetch
