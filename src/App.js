import React from 'react';
import './App.css';
import YatesWebsiteBackground from './components/YatesWebsiteBackground';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="App">
      <div className="App-contianer">
        <YatesWebsiteBackground />
      </div>

      <ChatWindow />
    </div>
  );
}

export default App;
