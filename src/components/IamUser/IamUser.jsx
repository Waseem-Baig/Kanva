import React from "react";
import IAM from "./IamUserComponents/IAM";
import Notifications from "./IamUserComponents/Notifications";
import Users from "./IamUserComponents/Users";

const IamUserPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full gap-4">
        <IAM />
        <Notifications />
      </div>
      <Users />
    </div>
  );
};

export default IamUserPage;
