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
		<NavBar/>
		<Jumbotron />

		<div className="row mx-5">
		    <div className="col-12 col-lg-3 col-md-6 col-sm-12 mb-4">
		       <Card/>
			</div>
			<div className="col-12 col-lg-3 col-md-6 col-sm-12 mb-4">
				<Card/>
			</div>
			<div className="col-12 col-lg-3 col-md-6 col-sm-12 mb-4">
				<Card/>
			</div>
			<div className="col-12 col-lg-3 col-md-6 col-sm-12 mb-4">
				<Card/>
			</div>
		</div>
        <Footer/>
		</>		
	);
};

export default Home;
