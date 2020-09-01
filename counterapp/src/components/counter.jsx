import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5874,
  };
  render() {
    return (
      <div>
        <span>{2 + 2}</span>
        <button>Increament</button>
      </div>
    );
  }
}

formatCount() {
  return this.state.count === 0 ? 'zero' : this.state.count;
}

export default Counter;
