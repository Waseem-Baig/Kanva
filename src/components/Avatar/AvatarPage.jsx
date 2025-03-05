import React from "react";
import AvatarHome from "./AvatarComponents/AvatarHome";
import Preview from "./AvatarComponents/preview";

const AvatarPage = () => {
  return (
    <div className="flex w-full gap-6 flex-wrap cu:flex-nowrap">
      <AvatarHome />
      <Preview />
    </div>
  );
};

export default AvatarPage;
