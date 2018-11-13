import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Aboutme extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <h1 style={{ fontSize: "66px", fontWeight: "bold", color: "white" }}>
            About me
          </h1>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
