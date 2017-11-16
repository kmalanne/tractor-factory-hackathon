import React from 'react';

import Message from './Message';

class Messages extends React.Component {
  componentDidUpdate() {
    const el = document.getElementById('chat-messages');
    el.scrollTop = el.scrollHeight;
  }

  render() {
    const messages = this.props.messages.map((message, i) => {
      return (
        <div className='chat-message-container' key={i}>
          <Message
            key={i}
            sender={message.sender}
            message={message.message}
            fromMe={this.props.username === message.sender} />
        </div>
      );
    });

    return (
      <div className='chat-messages' id='chat-messages'>
        {messages}
      </div>
    );
  }
}

Messages.defaultProps = {
  messages: [],
  username: 'anon'
};

export default Messages;