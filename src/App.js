import React from 'react';
import './App.css';
import YatesWebsiteBackground from './components/YatesWebsiteBackground';
import ChatWindow from './components/ChatWindow';
import styled from 'styled-components';

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
`;

const ChatWindowContainer = styled.div`
  position: fixed;
  bottom: 0px;
  right: 150px;
  z-index: 9999999999;

  @media (max-width: 720px) {
    left: 0px;
  }
`;

function App() {
  return (
    <AppContainer>
      <YatesWebsiteBackground />
      <ChatWindowContainer>
        <ChatWindow />
      </ChatWindowContainer>
    </AppContainer>
  );
}

export default App;
