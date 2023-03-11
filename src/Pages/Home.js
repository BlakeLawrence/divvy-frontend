import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-screen bg-[#05998C] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-3xl font-bold mb-12 mr-6 ml-6">
          Watch this space Okes!!
        </h1>
        <h2 className="text-white text-lg text-center font-bold m-6">
          No More embarrasing bill splitting will be tolerated 😜"
        </h2>
      </div>
      <button className="bg-white w-4/12 sm:w-1/12 rounded-xl p-2 mt-24 text-[#05998C] font-medium hover:text-white hover:bg-[#05998C] sm:mr-6">
        <Link to="/">back to home</Link>
      </button>
    </div>
  );
}

export default Home;