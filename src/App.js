import React from 'react';
import './App.css';
import YatesWebsiteBackground from './components/YatesWebsiteBackground';
import ChatWindow from './components/ChatWindow';
import styled from 'styled-components';

const AppContainer = styled.div`
  position: relative;
  width: 550px;
  margin: auto;
`;

const ChatWindowContainer = styled.div`
  position: relative;

  @media (max-width: 720px) {
    left: 0px;
  }
`;

function App() {
  return (
    <AppContainer>
      <ChatWindowContainer>
        <ChatWindow />
      </ChatWindowContainer>
    </AppContainer>
  );
}

export default App;
