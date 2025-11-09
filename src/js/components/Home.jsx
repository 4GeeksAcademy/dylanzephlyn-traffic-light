import React, { useState } from "react";
import { Semaforo } from "./Semaforo";


//create your first component
const Home = () => {

	return (
		<>
		<h1 className="text-center mt-2">Semaforo:</h1>
		<div className="d-flex justify-content-center mt-5">
			<Semaforo/>
	  	</div>
		</>
	);
};

export default Home;

