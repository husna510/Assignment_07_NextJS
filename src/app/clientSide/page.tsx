"use client";

import React, { useState, useEffect } from "react";

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
      console.log("products >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200"
          >
           
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain bg-white p-4"
            />
            
            <div className="   p-4">
              <h2 className="text-lg font-serif font-semibold mb-2 text-gray-800 hover:underline hover:text-blue-800">
                {product.title}
              </h2>

              <p className="text-sm font-medium text-gray-500">
                Category:{" "}
                <span className="text-gray-800">{product.category}</span>
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex justify-start">
                  <p className="text-xl font-bold text-red-600">
                    ${product.price}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-[16px] font-semibold">
                    Rating: {product.rating.rate}
                  </p>
                  <p className="text-gray-600">
                    ({product.rating.count} reviews)
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-3 text-xs">
                <p className="font-semibold text-sm">description:</p>{" "}
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSidePage;
