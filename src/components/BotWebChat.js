import React, { Component } from 'react';
import styled from 'styled-components';

import ReactWebChat from 'botframework-webchat';

// Complete list of style options found at:
// https://github.com/microsoft/BotFramework-WebChat/blob/master/packages/component/src/Styles/defaultStyleOptions.js

const WebChat = styled.div`
  width: 350px;
  height: 400px;
  position: fixed;
  bottom: 0%;
  flex-grow: 1;
  z-index: 9999999999;

  @media (max-width: 720px) {
    width: 100%;
    height: 90vh;
  }
`;

class WebChatCP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }

  async componentWillMount() {
    const myHeaders = new Headers();
    var myToken = process.env.REACT_APP_DIRECTLINE_SECRET;
    myHeaders.append('Authorization', 'Bearer ' + myToken);
    myHeaders.append('Content-Type', 'application/json');

    const res = await fetch(
      'https://directline.botframework.com/v3/directline/tokens/generate',
      {
        method: 'POST',
        headers: myHeaders,
        body: `{    
              user: {  
                id: "dl_123", // user id must start with 'dl_'
                name: "user"
              } 
            }`
      }
    );

    const { token } = await res.json();
    this.setState(() => ({ token: token }));
  }

  render() {
    const {
      state: { token }
    } = this;

    return (
      !!token && (
        <WebChat id="webchat">
          <ReactWebChat
            directLine={window.WebChat.createDirectLine({ token })}
            styleOptions={webChatStyleOptions}
          />
        </WebChat>
      )
    );
  }
}

const webChatStyleOptions = {
  // bot bubble styles
  bubbleBackground: '#eaeaea;',
  bubbleTextColor: '#212121',
  bubbleBorderRadius: 5,
  // bot bubble styles
  bubbleFromUserBackground: '#dfedcb',
  bubbleFromUserTextColor: '#ffffff',
  bubbleFromUserBorderRadius: 5,
  bubbleFromUserBorder: 'solid 1px #dfedcb',
  // brand avatar
  botAvatarImage: 'partner-yates.jpg',
  avatarSize: 40,
  accent: '#ffffff'
};

export default WebChatCP;
