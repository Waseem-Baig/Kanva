"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import NewApi from "./NewApi";
import AvailableDataset from "./AvailableDataset";
import NewDataSet from "./NewDataSet";

const Create = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);

  const openModal = (tab) => {
    setSelectedTab(tab);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col gap-2 w-full font-jost text-[#F5F2FA]">
      <h1 className="text-2xl font-semibold">Create</h1>
      <div className="flex justify-between items-center gap-6 bg-[#05061480] rounded-lg w-full p-8 flex-wrap">
        {[
          { key: "ownApi", label: "OWN API" },
          { key: "savedDatasets", label: "Saved Datasets" },
          { key: "createNew", label: "Create New Data Res" },
        ].map(({ key, label }) => (
          <button
            key={key}
            className="flex justify-center items-center py-3 text-center w-auto flex-grow bg-[linear-gradient(290.78deg,_rgba(55,32,84,0.5)_0%,_rgba(84,32,164,0.5)_100%)] font-semibold rounded-md border border-[#FFFFFF1A] min-w-[250px] hover:bg-[linear-gradient(0deg,rgba(84,32,164,0.8),rgba(84,32,164,0.8)),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] hover:shadow-[0px_10px_10px_0px_#0000001A,0px_4px_4px_0px_#0000000D,0px_1px_0px_0px_#0000000D,-1px_-2px_6px_0px_#9747FFBF_inset,0px_4px_8px_0px_#0000004D_inset] hover:backdrop-blur-[20px]"
            onClick={() => openModal(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Modal Handling */}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        >
          {selectedTab === "ownApi" ? (
            <NewApi />
          ) : selectedTab === "savedDatasets" ? (
            <AvailableDataset />
          ) : (
            <NewDataSet />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Create;
