import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Navbar from "./navbar"
import Home from "./home"
import Service from "./service"
import About from "./about"
import Contact from "./contact"
import Footer from "./footer"
import Signin from "./signIn"
import ProductDetails from "./productDetails"
import NewAccount from "./createAccount"

function App() {
	const [isCardEmpty, setIsCardEmpty] = useState(true)
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/service" element={<Service />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="/signIn" element={<Signin/>}></Route>
						<Route path="/createAccount" element={<NewAccount/>}></Route>
						<Route path="/productDetails/:id" element={<ProductDetails/>}></Route>
						<Route path="/redirect" element={isCardEmpty ? <Navigate to='/about' />: <p>Oops seems like a wrong page😯</p>}></Route>
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	)
}

export default App
