import React from 'react';
import { Button } from '@/components/ui/button';

const InfoPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Setup For ReactJS: </h1>
      <p className="mb-6">
        This page demonstrates the integration of Tailwind CSS and shadcn UI components.
      </p>
      <p className="mb-6">
        This setup is for React@vite + Javascript Variant + tailwindcss + shadcn.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Button Variants: Shadcn Properties</h2>
        <div className="flex gap-4">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Tailwind CSS Utilities</h2>
        <div className="flex gap-4">
          <div className="p-4 bg-blue-500 text-white rounded">Blue Box</div>
          <div className="p-4 bg-green-500 text-white rounded">Green Box</div>
          <div className="p-4 bg-red-500 text-white rounded">Red Box</div>
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
