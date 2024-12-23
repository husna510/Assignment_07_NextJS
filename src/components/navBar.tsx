"use client";
import { IoServer } from "react-icons/io5";
import { RiUserReceived2Fill } from "react-icons/ri";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
       
        <h1 className="text-2xl font-bold text-cyan-950 mb-6 text-center">
          Data Fetching App
        </h1>

       
        <div className="flex flex-col gap-4">
        <button
      onClick={() => (window.location.href = "/clientSide")}
      className="w-full px-6 py-3 bg-lime-600 text-white rounded-lg font-medium shadow-md hover:bg-slate-900 hover:scale-105 hover:shadow-lg transition-transform flex items-center justify-center gap-2"
    >
      
      <span className="text-2xl">
        <RiUserReceived2Fill/>
      </span>
      Client Side
    </button>
          <button
            onClick={() => (window.location.href = "/serverSide")}
            className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-slate-900 hover:scale-105 hover:shadow-lg transition-transform flex items-center justify-center gap-2"
          >
            <span className="text-2xl"><IoServer/></span>
            Server Side
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
