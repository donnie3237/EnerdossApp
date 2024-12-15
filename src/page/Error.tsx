import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
      <p className="text-lg mb-6">The page you’re looking for doesn’t exist.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
