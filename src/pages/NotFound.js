import React from "react";
import notFound from "../images/notFound.svg";

function NotFound() {
  return (
		<div className="not-found">
			<h1 className="not-found-text">Page not found</h1>
			<img src={notFound} alt="Page not found art." className="not-found-img" />
			<a
				type="button"
				href="http://localhost:3000"
				className="not-found-back"
			>
				Go back to log in
			</a>
		</div>
  );
}

export default NotFound;
