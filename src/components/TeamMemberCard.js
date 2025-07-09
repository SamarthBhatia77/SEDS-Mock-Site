import React from 'react';
import Link from 'next/link';
export default function TeamMemberCard({ name, role, image }) {
  return (
    <div className="bg-gradient-to-b from-[#2a699c] to-[#282829] ml-4 border border-none text-white p-4 rounded-md shadow-md flex flex-col items-center w-[300px] h-[350px] border border-white/20
    transform transition duration-200 ease-in-out hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-35 mt-11 rounded-full object-cover mb-4"
      />
      <h3 className="text-[25px] font-bold font-mono">{name}</h3>
      <p className="text-md text-gray-300">{role}</p>
    </div>
  );
}