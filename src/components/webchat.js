import React, { Component } from 'react';

import ReactWebChat from 'botframework-webchat';

class WebChatCP extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      token: null,
      
      styleOptions : {
        backgroundColor: 'Black',
        bubbleBackground: '#222',
        bubbleBorder: 'solid 1px #444',
        bubbleBorderRadius: 20,
        bubbleFromUserBackground: '#222',
        bubbleFromUserBorder: 'solid 1px #444',
        bubbleFromUserBorderRadius: 20,
        bubbleFromUserTextColor: 'White',
        bubbleTextColor: 'White'
      }
    }   
  }

  async componentDidMount() {

    const myHeaders = new Headers()
    var myToken = process.env.REACT_APP_DIRECTLINE_SECRET
    myHeaders.append('Authorization', 'Bearer ' + myToken)
    myHeaders.append('Content-Type', 'application/json')

    const res = await fetch(
        'https://directline.botframework.com/v3/directline/tokens/generate',
        {
            method: 'POST',
            headers: myHeaders,
            body: 
            `{    
              user: {  
                id: "dl_123_2", // user id must start with 'dl_'
                name: "user"
              }
            }`
        }
    )

    const { token } = await res.json()
    this.setState(() => ({ token: token }))
  }

  render() {
    const {
      state: { token, styleOptions }
    } = this;

    return (

      !!token && 
        (<div id="webchat" className="WebChat">
          <ReactWebChat 
            directLine={ window.WebChat.createDirectLine({ token }) }

            styleOptions={styleOptions}
          /> 
        </div>)
    )
  }
}

export default WebChatCP;
