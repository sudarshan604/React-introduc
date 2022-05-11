import React from "react";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    console.log(this.state.text);
    return (
      <div>
        <main>
          <p>No new Notification</p>
        </main>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button>click to save</button>
      </div>
    );
  }
}

export default App;
