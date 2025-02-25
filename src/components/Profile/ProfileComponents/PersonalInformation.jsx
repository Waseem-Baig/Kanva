"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProfileInput from "./ProfileInput";
import ProfileSelect from "./ProfileSelect"; // Import the new ProfileSelect component
import ChangePassword from "./ChangePassword";

const PersonalInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    adminName: "Elon Musk",
    orgEmail: "cisco.kanva@cisco.com",
    contactNumber: "91923770122",
    city: "Rajahmundry",
    pinCode: "533101",
    orgName: "Cisco Pvt Ltd.",
    orgRole: "Manager",
    address: "Silicon Valley, CA",
    state: "Andhra Pradesh",
    country: "India",
  });
  const [popUpOpen, setPopUpOpen] = useState(false);

  const handlePopUp = (e) => {
    e.preventDefault();
    setPopUpOpen((prev) => !prev);
  };

  const roles = ["Manager", "Admin", "Supervisor", "Employee"]; // Add role options

  const handleChange = (e) => {
    if (isEditing) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center w-full text-[#FFFFFF] font-baloo2">
          <h1 className="font-bold text-[1.7rem] font-jost">
            {isEditing ? "Edit Profile" : "Profile"}
          </h1>
          <div className="flex gap-4">
            {!isEditing && (
              <button
                className="bg-[linear-gradient(0deg,rgba(84,32,164,0.1),rgba(84,32,164,0.1)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] py-2 px-4 rounded-lg shadow-[0px_10px_10px_#0000001A,0px_4px_4px_#0000000D,0px_1px_0px_#0000000D] backdrop-blur-[20px]"
                onClick={handlePopUp}
              >
                Change password
              </button>
            )}
            <button
              onClick={toggleEdit}
              className="bg-[linear-gradient(0deg,#5420A4,#5420A4),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] py-2 px-4 rounded-lg shadow-[0px_10px_10px_#0000001A,0px_4px_4px_#0000000D,0px_1px_0px_#0000000D] backdrop-blur-[20px] flex gap-2 justify-center items-center"
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
              <Image src={"/svgs/edit.svg"} width={20} height={20} alt="Edit" />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-8 flex-wrap w-full rounded-lg bg-[#05061480] p-8">
          <div className="flex flex-col gap-6 min-w-[45%]">
            <h2 className="font-bold text-2xl">Personal Information</h2>
            <ProfileInput
              label="Admin Name"
              name="adminName"
              value={formData.adminName}
              onChange={handleChange}
              placeholder="Elon Musk"
              readOnly={!isEditing}
            />
            <ProfileInput
              label="Organization Gmail"
              name="orgEmail"
              value={formData.orgEmail}
              onChange={handleChange}
              placeholder="cisco.kanva@cisco.com"
              readOnly={!isEditing}
            />
            <ProfileInput
              label="Contact Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="91923770122"
              readOnly={!isEditing}
            />
            <ProfileInput
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Rajahmundry"
              readOnly={!isEditing}
            />
            <ProfileInput
              label="Pin code"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="533101"
              readOnly={!isEditing}
            />
          </div>
          <div className="flex flex-col gap-6 min-w-[45%]">
            <h2 className="font-bold text-2xl">Organization Details</h2>
            <ProfileInput
              label="Organization Name"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="Cisco Pvt Ltd."
              readOnly={!isEditing}
            />
            <ProfileSelect
              label="Organization Role"
              name="orgRole"
              value={formData.orgRole}
              onChange={handleChange}
              options={roles}
              disabled={!isEditing}
            />
            <ProfileInput
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Silicon Valley, CA"
              readOnly={!isEditing}
            />
            <ProfileInput
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Andhra Pradesh"
              readOnly={!isEditing}
            />
            <ProfileInput
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="India"
              readOnly={!isEditing}
            />
          </div>
        </div>
      </div>
      {popUpOpen && <ChangePassword isOpen={popUpOpen} onClose={handlePopUp} />}
    </div>
  );
};

export default PersonalInformation;
