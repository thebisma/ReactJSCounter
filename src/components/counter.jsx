import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 50,
    textAlign: "center"
  };
  handleIncrement = () => {
    // this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    // this.state.count++;
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid className="demo-grid-1">
          <Cell col={3} />
          <Cell col={3}>
            <button
              onClick={this.handleIncrement}
              className="btn btn-primary btn-md"
            >
              Increment
            </button>
          </Cell>
          <Cell col={3}>
            <button
              onClick={this.handleDecrement}
              className="btn btn-primary btn-md"
            >
              Decrement
            </button>
          </Cell>
          <Cell col={3} />
        </Grid>
        <Grid className="demo-grid-2">
          <Cell col={4} />
          <Cell col={4}>
            <div style={this.styles} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </div>
          </Cell>
          <Cell col={4} />
        </Grid>

        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
