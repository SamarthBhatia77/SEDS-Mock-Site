'use client'
import React,{useState} from 'react';
import Link from 'next/link';
export default function TeamMemberCard({ name, role, image }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedRole, setEditedRole] = useState(role);

   const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#2a699c] to-[#282829] ml-4 border border-none text-white p-4 rounded-md shadow-md flex flex-col items-center w-[300px] h-[350px] border border-white/20
    transform transition duration-200 ease-in-out hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-35 mt-11 rounded-full object-cover mb-4"
      />
    {/*For name*/}
    {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="text-white p-1 rounded text-center w-[90%] mb-2"
        />
      ) : (
        <h3 className="text-[25px] font-bold font-mono">{editedName}</h3>
      )}

    {/* Role */}
      {isEditing ? (
        <input
          type="text"
          value={editedRole}
          onChange={(e) => setEditedRole(e.target.value)}
          className="text-white p-1 rounded text-center w-[90%] mb-2"
        />
      ) : (
        <p className="text-md text-gray-300">{editedRole}</p>
      )}

      {/* Edit/Save Button */}
      <button
        onClick={() => {
          if (isEditing) handleSave();
          else setIsEditing(true);
        }}
        className="mt-4 px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}