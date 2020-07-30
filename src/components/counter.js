import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement, reset } from "../action/indexAction";

class Counter extends Component {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  reset = () => {
    this.props.dispatch(reset());
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={this.decrement}>-</button>
        <span> {this.props.count} </span>
        <button onClick={this.increment}>+</button>
        <br />
        <br />
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}


export default connect(mapStateToProps)(Counter);
