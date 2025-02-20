import Image from "next/image";
import React from "react";

const CreateAvatarCard = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex min-w-[360px] min-h-[210px] w-fit px-[7.5%] rounded-lg items-center justify-center h-auto bg-[#05061480] backdrop-blur-[20px] shadow-[0px_5px_10px_#0000000D,0px_15px_30px_#0000000D,0px_30px_60px_#0000001A,inset_0px_50px_100px_#FFFFFF26] border border-[#05061420] transition-all duration-300 gap-2 flex-grow"
    >
      <Image src="/svgs/plus.svg" width={50} height={50} alt="Add Avatar" />
      <p className="text-[#F5F2FA] text-lg font-semibold">Create New Avatar</p>
    </button>
  );
};

export default CreateAvatarCard;
