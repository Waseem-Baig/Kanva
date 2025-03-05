"use client";

import React from "react";
import AvatarDetails from "./AvatarDetails";
import { useAvatar } from "@/context/AvatarContext";

const AvatarHome = () => {
  const { avatar } = useAvatar();

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
