import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="py-16 px-14 ">
        <h1 className="mb-60 text-6xl uppercase font-bold text-center">Small Projects</h1>
        
        
        <Link
          to="todo"
          className="p-4 border-black border rounded-lg bottom-8 hover:text-white hover:bg-black mx-8 w-32"
        >
          Todo List
        </Link>
      </div>
    </>
  );
};

export default Home;
