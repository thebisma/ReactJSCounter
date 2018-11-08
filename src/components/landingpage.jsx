import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ImageProfile from "./bisma.jpg";
class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={ImageProfile} alt={"avatar"} className="Image-shake" />
            <div className="banner-text">
              <h1>Front End Developer</h1>
              {/* <hr /> */}
              <p>
                HTML/CSS | React JS | Wordpress | React Native | Swift | Node JS
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
