import React from "react";

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
};

const ServerPage = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const parsedResponse: Products[] = await response.json();
    console.log("products >>>", parsedResponse);
  return <div>
    {parsedResponse.map((products, index) => (
        <div key={index} className="flex flex-col gap-6 border border-blue-200">
            <p>Id: products.id</p>
            <p>title: {products.title}</p>
            <p>price: {products.price}</p>
            <p>description: {products.description}</p>
            <p>category: {products.category}</p>
            <p>image: {products.image}</p>
            <p>rating: {products.rating.rate}</p>
            <p>reviews: {products.rating.count}</p>
        </div>
    ))}
  </div>;
};

export default ServerPage;
