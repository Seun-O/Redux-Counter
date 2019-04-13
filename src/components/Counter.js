import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
  incrementIfOdd = () => {
    if (this.props.count % 2 !== 0) {
      this.props.increment(this.props.count);
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      this.props.increment(this.props.count);
    }, 5000);
  };

  render() {
    return (
      <p>
        Clicked: {this.props.count} times
        <button
          onClick={() => {
            this.props.increment(this.props.count);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.decrement(this.props.count);
          }}
        >
          -
        </button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);
