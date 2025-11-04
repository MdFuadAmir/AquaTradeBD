import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
     <div className="flex items-center justify-center h-screen px-4">
      <div className="text-center">
        <FaExclamationTriangle className="text-teal-500 text-6xl mb-6 mx-auto" />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you are looking for does not exist or something went wrong.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold shadow transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;
