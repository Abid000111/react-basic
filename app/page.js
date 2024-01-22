"use client";
import Header from "@/Components/Header";
import React, { useState } from "react";

const page = () => {
	const [marks, setMarks] = useState(80);
	// const [owner, setOwner] = useState("Abid Shahrier");
	// const owner = [{ name: "Abid Shahrier" }];
	// const owner = { name: "Abid Shahrier" };
	const owner = "Abid Shahrier";
	return (
		<>
			{/* <div>
				{owner.map((item) => (
					<Header owner={item} />
				))}
			</div> */}
			{/* <Header owner={owner} /> */}
			<Header owner={owner} />
			<h1 className="text-red-500 text-4xl font-bold w-[40vw] h-[10vh] text-center bg-black my-32 mx-auto py-6">
				My marks is {marks}
			</h1>

			<div className="flex justify-center">
				<button
					onClick={() => {
						setMarks(marks + 1);
					}}
					className="bg-black text-red-500 w-[13vw] h-[5vh] font-bold text-2xl rounded-2xl"
				>
					Update
				</button>
			</div>
		</>
	);
};

export default page;
