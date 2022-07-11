import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
					<Link to="/profile">
						<button className="btn btn-primary m-2">Profile</button>
					</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary m-2">Sign Up </button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary m-2">Login </button>
					</Link>
					
				</div>
			</div>
		</nav>
	);

};
