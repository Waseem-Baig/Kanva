"use client";
import Image from "next/image";
import { useState } from "react";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Input Field */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[#F5F2FA] text-md font-semibold">Tags</label>
        <input
          type="text"
          placeholder="Enter the Avatar location to tag"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-[400px] p-3 rounded-lg bg-[#F5F2FA] shadow-[inset_0px_4px_8px_0px_#0000004D] text-black placeholder:text-[#878787] focus:outline-none"
        />
      </div>

      {/* Tags Container (Fixed Size) */}
      <div className="flex flex-wrap gap-2 p-3 w-[400px] h-[150px] bg-[#121212] rounded-lg mb-4 shadow-[inset_-1px_-2px_6px_#9747FFBF,inset_0px_4px_8px_#0000004D,0px_10px_10px_#0000001A,0px_4px_4px_#0000000D,0px_1px_0px_#0000000D] backdrop-blur-[20px] overflow-hidden">
        <div className="flex flex-wrap gap-2 w-full h-full overflow-y-auto scrollbar-hide">
          {tags.length === 0 ? (
            <p className="text-[#878787] text-sm">No tags added yet.</p>
          ) : (
            tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gradient-to-r from-black via-[#372054] to-[#5420A4] text-white p-2 w-auto h-fit rounded-lg text-sm font-medium break-words"
              >
                <span>{tag}</span>
                <button
                  onClick={() => removeTag(index)}
                  className="focus:outline-none"
                  aria-label="Remove tag"
                >
                  <Image
                    src="/svgs/close.svg"
                    alt="Remove"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TagInput;
