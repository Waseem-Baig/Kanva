import React from "react";

const ProfileSelect = ({ label, name, value, onChange, options, disabled }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-300 text-sm mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.02)_0%,_rgba(255,255,255,0.1)_100%)] rounded-lg px-4 py-[1.5vh] bg-transparent w-auto flex-grow backdrop-blur-[20px] focus:outline-none focus:ring-0 focus:ring-[#5420A4] appearance-none"
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="text-white bg-[#5420A4] hover:bg-transparent p-2"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProfileSelect;
