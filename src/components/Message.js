import React from 'react';

class Message extends React.Component {
  render() {
    const origin = this.props.fromMe ? 'from-me' : 'from-somebody-else';

    return (
      <div className={`chat-message ${origin}`}>
        <div className='chat-message-sender'>
          {this.props.sender}
        </div>
        <div className='chat-message-body'>
          {this.props.message}
        </div>
      </div>
    );
  }
}

Message.defaultProps = {
  message: '',
  sender: 'anon',
  fromMe: false
};

export default Message;