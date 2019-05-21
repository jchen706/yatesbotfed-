import React, { Component } from 'react';

import ReactWebChat from 'botframework-webchat';

// Complete list of style options found at:
// https://github.com/microsoft/BotFramework-WebChat/blob/master/packages/component/src/Styles/defaultStyleOptions.js

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
        <div id="webchat" className="WebChat">
          <ReactWebChat
            directLine={window.WebChat.createDirectLine({ token })}
            styleOptions={webChatStyleOptions}
          />
        </div>
      )
    );
  }
}

export default WebChatCP;
