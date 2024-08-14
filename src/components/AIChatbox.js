import React, { useState } from "react";
import axios from "axios";

const AIChatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      const aiMessage = {
        sender: "ai",
        text: response.data.choices[0].message.content,
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div style={styles.chatboxContainer}>
      <div style={styles.chatboxMessages}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.chatboxMessage,
              ...(message.sender === "user"
                ? styles.userMessage
                : styles.aiMessage),
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={styles.chatboxForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.chatboxInput}
        />
        <button type="submit" style={styles.chatboxSend}>
          Send
        </button>
      </form>
    </div>
  );
};

const styles = {
  chatboxContainer: {
    width: "400px",
    maxWidth: "100%",
    border: "1px solid #ddd",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
    margin: "auto",
  },
  chatboxMessages: {
    flexGrow: 1,
    padding: "10px",
    overflowY: "auto",
    maxHeight: "500px",
    backgroundColor: "#fff",
  },
  chatboxMessage: {
    borderRadius: "10px",
    padding: "8px 12px",
    marginBottom: "10px",
    wordWrap: "break-word",
  },
  userMessage: {
    backgroundColor: "#dcf8c6",
    alignSelf: "flex-end",
  },
  aiMessage: {
    backgroundColor: "#e0e0e0",
    alignSelf: "flex-start",
  },
  chatboxForm: {
    display: "flex",
    borderTop: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#f1f1f1",
  },
  chatboxInput: {
    flexGrow: 1,
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginRight: "10px",
  },
  chatboxSend: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  chatboxSendHover: {
    backgroundColor: "#45a049",
  },
};

export default AIChatbox;
