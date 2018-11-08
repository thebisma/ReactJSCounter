import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Layout, Header, Content, Navigation, Drawer } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                My Website
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/aboutme"
              >
                <h5 style={{ color: "#fff" }}>Aboutme</h5>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/counter"
              >
                <h5 style={{ color: "#fff" }}>Gallery</h5>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/gallery"
              >
                <h5 style={{ color: "#fff" }}>Counter</h5>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/project"
              >
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
