import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Layout, Header, Content, Navigation, Drawer } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div style={{ height: "700px", position: "relative" }}>
        <Layout style={{ backgroundColor: "#FAFAFA" }}>
          <Header
            className="header-color"
            title={
              <span>
                <h4>My Website</h4>
              </span>
            }
          >
            <Navigation>
              <Link to="/aboutme">
                <h5 style={{ color: "#fff" }}>Aboutme</h5>
              </Link>
              <Link to="/counter">
                <h5 style={{ color: "#fff" }}>Gallery</h5>
              </Link>
              <Link to="/gallery">
                <h5 style={{ color: "#fff" }}>Counter</h5>
              </Link>
              <Link to="/project">
                <h5 style={{ color: "#fff" }}>Project</h5>
              </Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/aboutme">aboutme</Link>
              <Link to="/counter">gallery</Link>
              <Link to="/gallery">counter</Link>
              <Link to="/project">project</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
