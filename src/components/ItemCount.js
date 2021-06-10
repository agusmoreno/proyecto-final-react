import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    title: "Shampoo",
    counter: 0
  };

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <section>
        <div>
          <h1>{this.state.title}</h1>
          <div>
            <div>
              <button onClick={this.incrementCounter}>
                <span> +
                </span>
              </button>
            </div>
            <div >
              <h2>{this.state.counter}</h2>
            </div>
            <div >
              <button onClick={this.decrementCounter}>
                <span>-
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}