import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Chatbot = () => {
  // Initialize the chatbot with a welcome message
  React.useEffect(() => {
    addResponseMessage('Welcome to the chatbot! How can I assist you today?');
  }, []);

  // Function to handle user input
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    
    // Here, you can add logic to handle the user input
    // For example, sending the message to a backend API or a chatbot service
    // For demonstration, we'll just respond with a static message
    addResponseMessage(`You said: ${newMessage}`);
  };

  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Chatbot"
        subtitle="Ask me anything!"
      />
    </div>
  );
};

export default Chatbot;
