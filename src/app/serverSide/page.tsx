
import React from 'react';
import NavBar from '@/components/navBar';

interface Books {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const ServerPage = async () => {
  
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const books: Books[] = await response.json();

  return (
    <div>
      <NavBar />
      <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex flex-col gap-4 p-6 border border-blue-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-sm font-semibold text-gray-600">Id: {book.id}</p>
              <p className="text-lg font-bold text-blue-700">Name: {book.name}</p>
              <p className="text-md font-medium text-green-700">Type: {book.type}</p>
              <p className="text-sm text-gray-500">
                Available: <span>{book.available ? "✅" : "❌"}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerPage;
