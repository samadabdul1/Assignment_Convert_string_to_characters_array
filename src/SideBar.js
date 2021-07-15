import React, { Component } from "react";

import Side from "./Side";
import Content from "./Content";

class SideDrawer extends Component {
  state = {
    sidebarOpen: false
  };
  handleViewSidebar = () =>
    this.setState({ sidebarOpen: !this.state.sidebarOpen });

  render() {
    return (
      <div>
        <Side
          isOpen={this.state.sidebarOpen}
          toggleSidebar={this.handleViewSidebar}
        />
        <Content isOpen={this.state.sidebarOpen} />
      </div>
    );
  }
}

export default SideDrawer;

