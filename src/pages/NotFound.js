import React from "react";
import { Link } from "react-router-dom";
import notFound from "../images/notFound.svg";

function NotFound() {
  return (
		<div className="not-found">
			<h1 className="not-found-text">Page not found</h1>
			<img src={notFound} alt="Page not found art." className="not-found-img" />
			<Link
				to="../"
				className="not-found-back"
			>
				Go back to log in
			</Link>
		</div>
  );
}

export default NotFound;
