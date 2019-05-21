import React, { useState } from 'react';
import styled from 'styled-components';

import BotWebChat from './BotWebChat';

const ChatWindowHeader = styled.div`
  background: #d31145;
  color: white;
  font-size: 0.8em;
  border: 5px solid #d31145;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: 350px;
`;

const ChatWindowTitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  transition: color 0.3s ease;
`;

const ChatWindowBody = styled.div`
  font-size: 0.8em;
  background: white;
  border-left: 5px solid #d31145;
  border-right: 5px solid #d31145;
  width: 350px;
  height: ${props => (props.windowOpen ? '400px' : '0px')};
  visibility: ${props => (props.windowOpen ? 'visible' : 'hidden')};
  overflow: hidden;
`;

const ChatWindowContainer = styled.div`
  position: fixed;
  left: 80%;
  bottom: 0%;
  transform: translateX(-50%);
  box-shadow: 1px -3px 30px -7px rgba(0, 0, 0, 0.35);
`;

const ChatWindow = () => {
  const [windowOpen, toggleWindow] = useState(false);

  return (
    <ChatWindowContainer>
      <ChatWindowHeader onClick={() => toggleWindow(!windowOpen)}>
        <ChatWindowTitle>
          {windowOpen
            ? "You're now chatting with Yates!"
            : 'Have a question? Click here.'}
        </ChatWindowTitle>
      </ChatWindowHeader>

      <ChatWindowBody windowOpen={windowOpen}>
        <BotWebChat />
      </ChatWindowBody>
    </ChatWindowContainer>
  );
};

export { ChatWindow as default };