"use client";

import React, { useEffect, useState } from "react";
import AvatarDetails from "./AvatarDetails";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import AvatarData from "../../../../data/avatarsData";

const AvatarHome = () => {
  const searchParams = useSearchParams();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const foundAvatar = AvatarData.find((avatar) => avatar.id === Number(id));
      if (foundAvatar) {
        // Set the avatar data in cookies
        Cookies.set("avatarId", id);
        Cookies.set("avatarName", foundAvatar.name);
        setAvatar(foundAvatar); // Update state with the found avatar
      }
    } else {
      // If no ID in searchParams, try to get the avatar from cookies
      const savedId = Cookies.get("avatarId");
      if (savedId) {
        const savedAvatar = AvatarData.find(
          (avatar) => avatar.id === Number(savedId)
        );
        if (savedAvatar) {
          setAvatar(savedAvatar); // Update state with the saved avatar
        }
      }
    }
  }, [searchParams]);

  if (!avatar) {
    return <div>Avatar not found</div>;
  }

  return (
    <div className="flex justify-between w-full h-auto">
      <AvatarDetails {...avatar} />
    </div>
  );
};

export default AvatarHome;
