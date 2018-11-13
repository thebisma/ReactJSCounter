import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Thekripps from "./thekripps.jpg";
import Sunedu from "../sunedu.jpg";
class Project extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="project-grid-dua">
          <Cell col={2}>
            <div />
          </Cell>
          <Cell col={5}>
            <div className="container">
              <img src={Thekripps} alt="Avatar" className="image" />
              <div className="middle">
                <div class="text">thekrips.com</div>
              </div>
            </div>
          </Cell>
          <Cell col={2}>
            <div className="container">
              <img src={Sunedu} alt="Avatar" className="image" />
              <div className="middle">
                <div class="text">thekrips.com</div>
              </div>
            </div>
          </Cell>
          <Cell col={2}>
            <div />
          </Cell>
        </Grid>
        {/* <Grid className="demo-grid-2">
          <Cell col={6}>6</Cell>
          <Cell col={4}>4</Cell>
          <Cell col={2}>2</Cell>
        </Grid> */}
      </div>
    );
  }
}

export default Project;
