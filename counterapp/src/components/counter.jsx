import React, { Component } from "react";

class Counter extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "zero" : value;
  }

  render() {
    return (
      <div className="mb-2 mt-2">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-large btn-primary"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onReset(this.props.counter)}
          className="ml-2 btn btn-large btn-warning"
        >
          Reset
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="ml-2 btn btn-large btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
