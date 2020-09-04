import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncreament = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  resetIncreament = () => {
    this.setState({ value: (this.state.value = 0) });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  render() {
    return (
      <div className="mb-2 mt-2">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncreament({ id: 1 })}
          className="btn btn-large btn-primary"
        >
          Increament
        </button>
        <button
          onClick={this.resetIncreament}
          className="ml-2 btn btn-large btn-warning"
        >
          Reset
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="ml-2 btn btn-large btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
