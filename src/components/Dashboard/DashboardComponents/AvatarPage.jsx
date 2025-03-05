import React, { useState } from "react";
import AvatarCard from "./AvatarCard";
import CreateAvatarCard from "./CreateAvatar";
import AvatarData from "../../../../data/avatarsData";

const AvatarList = () => {
  const [avatars, setAvatars] = useState(AvatarData);

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
