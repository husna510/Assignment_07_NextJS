

"use client";
import NavBar from "@/components/navBar";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ClientSidePage = () => {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: Products[] = await response.json();
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl pt-12 font-bold text-center mb-8 hover:font-extrabold">
          Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: Products }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionMaxLength = 100;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowMoreButton = product.description.length > descriptionMaxLength;

  return (
    <div className="group bg-gradient-to-b from-white to-gray-100 shadow-md hover:shadow-cyan-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain bg-white p-4"
      />
      <div className="p-4">
        <h2 className="text-lg font-serif font-semibold mb-2 text-cyan-900 hover:underline hover:text-blue-800">
          {product.title}
        </h2>

        <p className="text-sm font-medium text-gray-500">
          Category: <span className="text-gray-800">{product.category}</span>
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start">
            <p className="text-xl font-bold text-red-600">${product.price}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-[16px] font-semibold">
              Rating: {product.rating.rate}
            </p>
            <p className="text-gray-600">({product.rating.count} reviews)</p>
          </div>
        </div>

        
        <p
          className={`text-gray-600 mb-3 text-xs transition-all duration-300 ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          <span className="font-semibold text-sm">Description:</span> {product.description}
        </p>

        
        {shouldShowMoreButton && (
          <button
            onClick={toggleDescription}
            className="text-gray-400 text-sm font-semibold hover:underline block mt-2 ml-1"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}

        <div className="flex pb-1 items-center justify-between py-4">
          <button className="flex justify-center  w-full items-center bg-black hover:bg-lime-700 text-white px-6 py-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
            <FaShoppingCart className="mr-2 text-center" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientSidePage;
