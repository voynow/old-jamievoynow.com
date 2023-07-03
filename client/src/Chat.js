import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

let socket;

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io('http://localhost:5000');

    socket.on('receive_message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.off();
    };
  }, []);

  const handleSendMessage = (event) => {
    event.preventDefault();
    
    if (message) {
      socket.emit('send_message', message);
      setMessage('');
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.header}>
        {/* You can customize this header as you want */}
        <h2 style={styles.headerTitle}>Chat with AI</h2>
      </div>
      <div style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form onSubmit={handleSendMessage} style={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
          placeholder="Type your message here..."
        />
        <button type="submit" style={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
}


const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    color: '#2c2c2c',
  },
  header: {
    padding: '20px',
    borderBottom: '1px solid #ddd',
  },
  headerTitle: {
    margin: 0,
  },
  messagesContainer: {
    flex: '1',
    overflowY: 'auto',
    padding: '20px',
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ddd',
    padding: '20px',
    alignItems: 'center',
  },
  input: {
    flex: '1',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    marginRight: '10px',
    outline: 'none',
  },
  sendButton: {
    padding: '10px 20px',
    backgroundColor: '#2c2c2c',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
};

export default Chat;
