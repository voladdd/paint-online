import React, { useState } from "react";
import "../styles/Chat.css";

interface ChatProps {
  onSend: (value: string, name: string) => void;
  messages: string[];
}

const Chat = ({ onSend, messages }: ChatProps) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="Chat">
      <div>
        {messages.map((message, index) => (
          <div className="text-3xl font-bold underline" key={index}>
            {message}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your name there"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Type your message..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => onSend(value, name)}>Send</button>
    </div>
  );
};

export default Chat;
