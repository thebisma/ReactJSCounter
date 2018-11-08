import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ImageProfile from "./bisma.jpg";
class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12} />
          <img src={ImageProfile} alt={"avatar"} className="avatar-img" />
        </Grid>
      </div>
    );
  }
}

export default Landing;
