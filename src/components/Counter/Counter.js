import React from "react";
import Table from "./Table";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <div className={`clicks-${count}`}>{count} clicks</div>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increment
        </button>
        <h1>Article Details</h1>
        <Table></Table>
      </div>
    );
  }
}

export default Counter;
