import React, { useState } from 'react';
import styled from 'styled-components';

import BotWebChat from './BotWebChat';

const ChatWindowHeader = styled.div`
  background: #66a000;
  color: #fff;
  font-size: 0.8em;
  border: 5px solid #66a000;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: 550px;

  @media (max-width: 720px) {
    width: 100vw;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const ChatWindowTitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  transition: color 0.3s ease;
  z-index: 9999999999;
  color: #fff;
`;

const ChatWindowBody = styled.div`
  font-size: 0.8em;
  background: white;
  border-left: 5px solid #66a000;
  border-right: 5px solid #66a000;
  border-bottom: 5px solid #66a000;
  width: 550px;
  height: ${props => (props.windowOpen ? '400px' : '0px')};
  visibility: ${props => (props.windowOpen ? 'visible' : 'hidden')};
  overflow: hidden;
  z-index: 9999999999;

  @media (max-width: 720px) {
    width: 900vw;
    height: ${props => (props.windowOpen ? '90vh' : '0px')};
    border-left: none;
    border-right: none;
  }
`;

const ChatWindowContainer = styled.div`
  z-index: 9999999999;
`;

const ChatWindow = () => {
  const [windowOpen, toggleWindow] = useState(false);

  return (
    <ChatWindowContainer>
      <ChatWindowHeader>
        <ChatWindowTitle>
          {windowOpen
            ? "You're now chatting with Yates!"
            : 'Type your question below'}
        </ChatWindowTitle>
      </ChatWindowHeader>

      <ChatWindowBody windowOpen={true}>
        <BotWebChat />
      </ChatWindowBody>
    </ChatWindowContainer>
  );
};

export { ChatWindow as default };
