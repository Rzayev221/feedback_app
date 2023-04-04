import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function NotFoundPage() {
  const status = 404;

  if (status === 404) {
    return (
      <div className="card">
        <h1>Page was not found</h1>
        <Link to="/notfound"></Link>
      </div>
    );
  }
}

export default NotFoundPage;
