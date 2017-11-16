import React from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      username: props.username
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ input: '' });
    this.props.onSend(this.state.username, this.state.input);
  }

  handleTextChange = (e) => {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <form className="chat-input" onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.handleTextChange}
          value={this.state.input}
          placeholder="Message"
          required />
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;