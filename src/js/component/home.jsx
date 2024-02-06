import React from "react";
import { TodoList } from "./TodoList.jsx";




//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-decoration-none mt-5"> To Do List Usando React</h1>
			<TodoList/>

		
		</div>
	);
};

export default Home;
