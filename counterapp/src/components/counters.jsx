import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="mb-2 mt-2">
        <button
          onClick={() => this.props.onTotalReset()}
          className="btn btn-large btn-primary ml-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onReset={this.props.onReset}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
