import React from "react";
import Image from "next/image";

interface CharboxProps {
  gymLeader: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const Charbox: React.FC<CharboxProps> = ({ gymLeader, name, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-xl border-4 transition-all duration-200 flex flex-col items-center
        ${isActive ? "border-blue-500" : "border-gray-300 "}
      `}
    >
      <Image
        src={gymLeader}
        alt={name}
        width={150}
        height={200}
        className="rounded-lg"
      />
      <h2 className="mt-2 text-lg font-semibold">{name}</h2>
    </div>
  );
};

export default Charbox;
