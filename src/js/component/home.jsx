import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//create your first component
const Home = () => {
	return (
			<>
			<NavBar />
			<Jumbotron />

			<div className="container-fluid d-flex gap-4 row m-2 justify-content-center pb-4">
			<Card />
			<Card />
			<Card />
			<Card />
			</div>
			<Footer/>
	
		</>
	)
};

export default Home;
