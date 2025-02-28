import React, { useState } from "react";
import AvatarCard from "./AvatarCard";
import CreateAvatarCard from "./CreateAvatar";

const AvatarList = () => {
  const [avatars, setAvatars] = useState([
    {
      name: "Sunny",
      gender: "Female",
      role: "Security Reception",
      status: "Active",
      activeHours: 234,
      totalScreens: 15,
      activeScreens: 10,
      avatarSrc: "/images/Avatarprofile1.png",
    },
    {
      name: "Alex",
      gender: "Male",
      role: "System Admin",
      status: "Inactive",
      activeHours: 187,
      totalScreens: 12,
      activeScreens: 8,
      avatarSrc: "/images/Avatarprofile2.png",
    },
    {
      name: "Priya",
      gender: "Female",
      role: "HR Manager",
      status: "Active",
      activeHours: 298,
      totalScreens: 20,
      activeScreens: 15,
      avatarSrc: "/images/Avatarprofile3.png",
    },
  ]);

  // Function to duplicate an avatar
  const handleDuplicate = (avatar) => {
    const newAvatar = { ...avatar, name: `${avatar.name}` };
    setAvatars([...avatars, newAvatar]);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#FFFFFF] font-bold font-baloo2 text-[1.5rem]">
        Avatars
      </p>
      <div className="flex flex-wrap gap-4 justify-around">
        {avatars.map((user, index) => (
          <AvatarCard
            key={index}
            {...user}
            onDuplicate={() => handleDuplicate(user)}
          />
        ))}
        <CreateAvatarCard />
      </div>
    </div>
  );
};

export default AvatarList;
