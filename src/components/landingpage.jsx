import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ImageProfile from "./bisma.png";
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
              <div className="social-links">
                <a href="http://google.com" targets="_blank">
                  <i
                    className="fa fa-github-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
                <a href="http://google.com" targets="_blank">
                  <i
                    className="fa fa-linkedin-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
                <a href="http://google.com" targets="_blank">
                  <i
                    className="fa fa-youtube-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
                <a href="http://google.com" targets="_blank">
                  <i
                    className="fa fa-facebook-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
