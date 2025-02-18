import React, { useState } from "react";
import { sendMessage } from "./Chat"; // Import the function
import "./index.css";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="chat-container">
      <div className="chat-header">Live Chat</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.user === "You" ? "user-message" : "bot-message"}`}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button  onClick={() => sendMessage(messages, setMessages, input, setInput)}>Send</button>
      </div>
    </div>
  );
}
