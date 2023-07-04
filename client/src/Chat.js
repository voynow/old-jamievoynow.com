import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";
import { colors } from './Theme';

let socket;

function Chat({ project }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false); // new state

    useEffect(() => {
        socket = io('http://localhost:5000');

        setMessages([{ text: "Hello! I'm here to assist you with any questions you have regarding this project.", sender: 'computer' }]);

        socket.on('receive_message', (message) => {
            setIsTyping(false); // new line
            setMessages((messages) => [...messages, { text: message, sender: 'computer' }]);
        });

        return () => {
            socket.off();
        };
    }, []);

    const handleSendMessage = (event) => {
        event.preventDefault();

        if (message) {
            setIsTyping(true); // new line
            socket.emit('send_message', { message: message, project: project.name });
            setMessages((messages) => [...messages, { text: message, sender: 'user' }]);
            setMessage('');
        }
    };

    return (
        <>
            <style>
                {`
            .typing-indicator {
                display: inline-block;
                position: relative;
                width: 40px;
                height: 20px;
            }

            .typing-indicator span {
                position: absolute;
                top: 0;
                width: 6px;
                height: 6px;
                margin-right: 3px;
                background: #444;
                border-radius: 50%;
                animation: typing-indicator 1.4s infinite ease-in-out both;
            }

            .typing-indicator span:nth-child(1) {
                left: 6px;
                animation-delay: -0.32s;
            }

            .typing-indicator span:nth-child(2) {
                left: 18px;
                animation-delay: -0.16s;
            }

            .typing-indicator span:nth-child(3) {
                left: 30px;
                animation-delay: 0;
            }

            @keyframes typing-indicator {
                0%, 80%, 100% { transform: scale(0); }
                40% { transform: scale(1); }
            }
            `}
            </style>
            <div style={styles.chatContainer}>
                <div style={styles.header}>
                    <h3 style={styles.headerTitle}>Chat with {project.name}</h3>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" style={styles.link}>Link to Github</a>
                </div>
                <div style={styles.messagesContainer}>
                    {messages.map((message, index) => (
                        <div style={message.sender === 'user' ? styles.userMessageContainer : styles.computerMessageContainer} key={index}>
                            <p style={message.sender === 'user' ? styles.userMessage : styles.computerMessage}>{message.text}</p>
                        </div>
                    ))}
                    {isTyping && <div className="typing-indicator"><span></span><span></span><span></span></div>} {/* new line */}
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
        </>
    );
}

const styles = {
    chatContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 110px)',
        justifyContent: 'space-between',
        backgroundColor: colors.lightGrey,
        color: colors.text,
        fontFamily: "system-ui",
    },
    header: {
        padding: '20px',
        borderBottom: '1px solid' + colors.grey,
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
        color: colors.text,
        border: '2px solid' + colors.text,
        padding: '5px',
        borderRadius: '5px'
    },
    messagesContainer: {
        flex: '1',
        overflowY: 'auto',
        padding: '20px',
        fontSize: '20px',
    },
    inputContainer: {
        display: 'flex',
        borderTop: '1px solid' + colors.grey,
        padding: '30px',
        alignItems: 'center',
        position: 'fixed',
        width: '80%',
        bottom: 0,
        backgroundColor: colors.lightGrey,
        left: '10%',
    },
    input: {
        flex: '1',
        border: 'none',
        borderRadius: '20px',
        padding: '15px 30px',
        marginRight: '10px',
        outline: 'none',
        fontSize: '20px',
        border: '2px solid' + colors.grey,
    },
    sendButton: {
        textDecoration: 'none',
        fontSize: '20px',
        color: colors.text,
        border: '2px solid' + colors.text,
        padding: '5px',
        borderRadius: '5px'
    },
    userMessageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '10px 0',
    },
    computerMessageContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '10px 0',
    },
    userMessage: {
        backgroundColor: colors.user_message_background,
        color: colors.white,
        padding: '10px',
        borderRadius: '10px',
    },
    computerMessage: {
        backgroundColor: colors.computer_message_background,
        color: colors.white,
        padding: '10px',
        borderRadius: '10px',
    },
};

export default Chat;
