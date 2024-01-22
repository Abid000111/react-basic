import React from "react";

function Header({ owner }) {
	return (
		<div className="bg-red-400 h-[10vh] text-black flex justify-between items-center px-5">
			{/* <div>{owner}</div> */}
			{/* <div>{owner.name}</div> */}
			{/* <div>{owner[0].name}</div> */}
			{/* <div>{owner.name}</div> */}
			<div>{owner}</div>
			<div>
				<ul className="flex gap-5">
					<li>home</li>
					<li>home</li>
					<li>home</li>
					<li>home</li>
					<li>home</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
