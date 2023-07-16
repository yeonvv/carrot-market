import React from "react";

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
}

export default function Button({ text, children }: ButtonProps) {
  return (
    <button className="flex justify-center w-full py-2 space-x-3 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition">
      <span>{text}</span>
      {children}
    </button>
  );
}
