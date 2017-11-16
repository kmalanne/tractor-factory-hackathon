import React from 'react';

import Messages from './Messages';
import ChatInput from './ChatInput';

import { send, subscribe } from '../services/ChatService';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillMount() {
    subscribe(messages => {
      this.setState({ messages });
    });
  }

  async sendMessage(sender, message) {
    await send({
      sender,
      message
    });
  }

  render() {
    return (
      <div className='chat-container'>
        <Messages messages={this.state.messages} username={this.props.username} />
        <ChatInput onSend={this.sendMessage} username={this.props.username}/>
      </div>
    );
  }
}

Chat.defaultProps = {
  username: 'anon'
};

export default Chat;