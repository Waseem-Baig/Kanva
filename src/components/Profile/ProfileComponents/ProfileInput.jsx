import React from "react";

const ProfileInput = ({ label, placeholder, value, onChange, name }) => {
  return (
    <div className="flex flex-col gap-1 min-w-[300px]">
      <label
        htmlFor={name}
        className="text-[#9E9E9E] text-sm pl-1 font-semibold"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="flex bg-[linear-gradient(180deg,_rgba(255,255,255,0.02)_0%,_rgba(255,255,255,0.1)_100%)] rounded-lg px-4 py-2 bg-transparent w-auto flex-grow backdrop-blur-[20px] text-[#FFFFFF] placeholder:text-[#FFFFFF]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default ProfileInput;
