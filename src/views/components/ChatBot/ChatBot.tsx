import React, { useState, useEffect } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

interface Message {
  id: number;
  text: string;
  fromUser: boolean;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputValue,
      fromUser: true,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue("");

    const botResponse: Message = {
      id: Date.now() + 1,
      text: "This is a placeholder response from the bot.",
      fromUser: false,
    };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          className="w-14 h-14 rounded-full bg-gray-700 text-white flex items-center justify-center shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaRegMessage />
        </button>
      )}

      {isOpen && (
        <div className="w-96 h-[80vh] bg-white border border-gray-300 rounded-lg shadow-lg mt-2 flex flex-col">
          <div className="flex justify-between items-center p-2 py-2 rounded-t-lg bg-gray-900">
            <span className="text-base font-semibold text-white">
              Поддержка
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 mr-2"
            >
              <RxCross1 />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-2 p-2 rounded-md ${
                  msg.fromUser
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex p-2 border-t border-gray-300">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message"
              className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};