import React from 'react';
import '../styles/App.css';

import Chat from './Chat';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      return (
        <Chat username={this.state.username} />
      );
    }

    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <div>
          <input
            type="text"
            onChange={this.handleUsernameChange}
            placeholder="Enter a username..."
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

App.defaultProps = {
};

export default App;
