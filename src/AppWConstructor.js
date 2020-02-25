import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  // We can use constructor in the following cases:
  //   1. Setting the initial state from the props (this in anti-pattern). There is another way with `componentDidMount`
  //   2. To bind the methods of the class / component. If not creating arrow methods.
  constructor(props) {
    super(props);

    this.state = {
      clickCount: props.startCount
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const updatedCount = this.state.clickCount + 1;

    // Update the state
    this.setState({ clickCount: updatedCount });
  }

  render() {
    return (
      <div className="App">
        <h3>Click Count: {this.state.clickCount} </h3>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default App;
