import { useState } from 'react';
import './LiveChat.css';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`live-chat-widget ${isOpen ? 'open' : ''}`}>
        <div className="chat-header" onClick={() => setIsOpen(!isOpen)}>
          <span>Need Help?</span>
          <div className="chat-icon">
            💬
          </div>
        </div>
        {isOpen && (
          <div className="chat-content">
            <div className="chat-messages">
              <div className="agent-message">
                <p>Hello! How can we help you with your visa today?</p>
              </div>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Type your message..." />
              <button>Send</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LiveChat;