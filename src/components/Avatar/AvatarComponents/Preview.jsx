"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Preview = () => {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [inputValue, setInputValue] = useState(""); // State to handle input field value
  const [loading, setLoading] = useState(false); // State to track if the bot is processing
  const chatContainerRef = useRef(null); // Ref for the chat container
  const inputRef = useRef(null); // Ref for the input field
  const [hasInputFocused, setHasInputFocused] = useState(false); // Track first input focus

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim() === "" || loading) return; // Don't send empty messages or if the bot is processing

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: "user" },
    ]);

    setLoading(true); // Set loading to true to lock the input

    // Simulate a bot response (same message for now)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "bot" },
      ]);
      setLoading(false); // Unlock the input after the bot responds
    }, 2000); // Simulate a 2-second delay for the bot response

    setInputValue(""); // Clear the input field
  };

  // Scroll to the bottom of the chat container when messages are updated
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (inputRef.current && hasInputFocused && !loading) {
      inputRef.current.focus();
    }
  }, [loading, hasInputFocused]); // Focus only if the user has interacted

  return (
    <div className="flex w-auto flex-col gap-2 font-baloo2 text-[#F5F2FA] rounded-lg">
      <h1 className="flex justify-start font-bold text-2xl">Preview</h1>

      {/* Video Container */}
      <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),linear-gradient(299.53deg,rgba(0,0,0,0)_29.05%,rgba(84,32,164,0.5)_100.44%)] backdrop-blur-[20px] shadow-[0px_30px_60px_0px_#0000001A,0px_15px_30px_0px_#0000000D,0px_5px_10px_0px_#0000000D,0px_50px_100px_0px_#FFFFFF26_inset] cu:w-[27vw] h-full p-4 rounded-lg flex flex-col min-h-[700px] w-[40vw]">
        {/* Background Video */}
        <div className="relative w-full h-[90%] rounded-lg overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          >
            <source src="/videos/avatarVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div className="relative z-10 p-4 flex justify-between">
            <Image
              src="/images/sriptoLogo.png"
              width={70}
              height={50}
              alt="Sripto"
            />
            <Image
              src="/images/vitapLogo.png"
              width={70}
              height={20}
              alt="VITAP"
            />
          </div>

          {/* Chat Messages */}
          <div
            ref={chatContainerRef}
            className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2 overflow-y-auto h-[80%] scrollbar-hide"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`py-2 px-4 rounded-lg max-w-[70%] break-words ${
                  message.sender === "user"
                    ? "bg-[linear-gradient(299.53deg,#000000_29.05%,#372054_84.15%,#5420A4_100.44%)] self-end"
                    : "bg-[#5420A4] self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
            {loading && (
              <div className="py-2 px-4 rounded-lg max-w-[70%] break-words bg-[#5420A4] self-start">
                Typing...
              </div>
            )}
          </div>
        </div>

        {/* Input Field (Inside Parent Div) */}
        <div className="flex justify-between gap-2 items-center mt-4 w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) handleSendMessage(); // Send message on Enter key press
            }}
            onFocus={() => setHasInputFocused(true)} // Track first click
            className={`w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.1)_100%)] 
            p-2 placeholder:text-[#F5F2FA] backdrop-blur-[20px] rounded-lg text-white bg-transparent ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            placeholder={
              loading ? "Wait for the bot to respond..." : "Enter text"
            }
            disabled={loading} // Disable input when loading
            ref={inputRef} // Ref for the input field
            // Automatically focus the input field on initial render
          />
          <button
            onClick={handleSendMessage}
            disabled={loading} // Disable button when loading
            className={`backdrop-blur-[20px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.1),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_1px_0px_0px_rgba(0,0,0,0.05)] rounded-lg p-2 w-auto h-auto flex justify-center items-center bg-[#5420A4] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image src="/svgs/share.svg" width={30} height={30} alt="Share" />
          </button>
          <button
            onClick={handleSendMessage}
            disabled={loading} // Disable button when loading
            className={`backdrop-blur-[20px] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.1),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_1px_0px_0px_rgba(0,0,0,0.05)] rounded-lg p-2 w-auto h-auto flex justify-center items-center bg-[#5420A4] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image src="/svgs/mic.svg" width={30} height={30} alt="Share" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
