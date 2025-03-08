// src/components/InfoPage.jsx
import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path as necessary

const InfoPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Integration Confirmation</h1>
      <p className="text-lg">
        This page confirms that <span className="font-semibold text-blue-500">Tailwind CSS</span> and <span className="font-semibold text-green-500">Shadcn UI</span> are integrated successfully into this React project.
      </p>

      {/* Tailwind CSS Buttons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tailwind CSS Button Variants:</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Primary</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Secondary</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Success</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Danger</button>
        </div>
      </div>

      {/* Shadcn UI Button */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Shadcn UI Button:</h2>
        <Button>Shadcn UI Button</Button>
      </div>

      {/* Tailwind CSS Card */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tailwind CSS Card:</h2>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="https://via.placeholder.com/400x200" alt="Sample" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              This is a sample card component styled with Tailwind CSS.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#css</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#webdev</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
