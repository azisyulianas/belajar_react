import React from "react";

interface State {
  count: number;
}

class Counter extends React.Component<object, State> {
  constructor(props:object) {
    super(props);
    this.state = {
      count:0
    }
  }
  render() {
    return(
      <div>
        <h1 className="text-center">{this.state.count && 0 }</h1>
        <button className="bg-amber-300 p-3" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
      </div>
    )
  }
}

export default Counter;