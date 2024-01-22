"use client";
// import React from "react";
import React, { useState } from "react";

const page = () => {
	const [marks, setMarks] = useState(80);
	// let marks = 80;
	// const changeMarks = () => {
	// 	console.log(marks);
	// 	setMarks(100);
	// 	// marks = 100;
	// 	console.log(marks);
	// };
	return (
		<>
			<h1 className="text-red-500 text-4xl font-bold w-[40vw] h-[10vh] text-center bg-black my-32 mx-auto py-6">
				My marks is {marks}
			</h1>
			
			<div className="flex justify-center">
				<button onClick={() => {
					setMarks(100);
				}} className="bg-black text-red-500 w-[13vw] h-[5vh] font-bold text-2xl rounded-2xl">
					Update
				</button>
			</div>
		</>
	);
};

export default page;
