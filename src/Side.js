import React, { Component } from "react";
import styled from "styled-components";
class Side extends Component {
  render() {
    var sidebarClass = this.props.isOpen ? "sidebar open" : "sidebar";
    return (
      <div className={sidebarClass}>
        <Title>Sidebar</Title>

        <Button onClick={this.props.toggleSidebar} className="sidebar-toggle">
          <img src={this.props.isOpen ? "https://raw.githubusercontent.com/GhostWolfRider/React-Side-Drawer/aefb9dbabe5faa158d53d29cf092cd74e07681d2/asset/Images/left.svg" : "https://raw.githubusercontent.com/GhostWolfRider/React-Side-Drawer/aefb9dbabe5faa158d53d29cf092cd74e07681d2/asset/Images/right.svg"} alt="arrow" />
        </Button>
      </div>
    );
  }
}

export default Side;
const Button=styled.button`
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -13px;
    height: 24px;
    width: 24px;
    z-index: 1;
`
const Title=styled.h1`
  display: flex;
  justify-content: center;
`