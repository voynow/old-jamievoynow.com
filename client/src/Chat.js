import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

let socket;

function Chat({ project }) {
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
        <h3 style={styles.headerTitle}>Chat with {project.name}</h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer" style={styles.link}>Link to Github</a>
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
    height: 'calc(100vh - 60px)',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    color: '#2c2c2c',
    paddingBottom: '60px',
    fontFamily: "system-ui",
  },
  header: {
    padding: '20px',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    margin: 0,
    fontSize: '24px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#2c2c2c',
    border: '1px solid #2c2c2c',
    padding: '5px',
    borderRadius: '5px'
  },
  messagesContainer: {
    flex: '1',
    overflowY: 'auto',
    padding: '20px',
    fontSize: '20px', // Larger message font size
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ddd',
    padding: '30px', // Larger padding for input container
    alignItems: 'center',
    position: 'fixed',
    width: '80%',
    bottom: 0,
    backgroundColor: '#f0f0f0',
    left: '10%',
  },
  input: {
    flex: '1',
    border: 'none',
    borderRadius: '20px',
    padding: '15px 30px', // Larger padding for input field
    marginRight: '10px',
    outline: 'none',
    fontSize: '20px', // Larger input font size
  },
  sendButton: {
    padding: '15px 30px', // Larger padding for send button
    backgroundColor: '#2c2c2c',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '18px', // Larger button font size
  },
};

export default Chat;
