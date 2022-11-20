import React, { useState } from "react";

interface ChatProps {
  onSend: (value: string, name: string) => void;
  messages: string[];
}

const Chat = ({ onSend, messages }: ChatProps) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
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
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
