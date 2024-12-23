import React from "react";

interface Books {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const ServerComp = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const parsedResponse: Books[] = await response.json();
  console.log("products >>>", parsedResponse);

  return (
    <div className=" min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 ">
      {parsedResponse.map((books, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 p-6 border border-blue-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
        >
          <p className="text-sm font-semibold text-gray-600">Id: {books.id}</p>
          <p className="text-lg font-bold text-blue-700">Name: {books.name}</p>
          <p className="text-md font-medium text-green-700">Type: {books.type}</p>
          <p className="text-sm text-gray-500">
            Available: <span>{books.available ? "✅" : "❌"}</span>
          </p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ServerComp;
