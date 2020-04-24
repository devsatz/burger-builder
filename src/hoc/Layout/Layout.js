import React, { Component } from "react";
import AuxWrap from "../AuxWrap";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  SideDrawerClosedhandler = () => {
    this.setState({ showSideDrawer: false });
  };
  SideDrawerTogglehandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <AuxWrap>
        <Toolbar drawerToggleClicked={this.SideDrawerTogglehandler} />
        <SideDrawer
          closed={this.SideDrawerClosedhandler}
          open={this.state.showSideDrawer}
        />
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </AuxWrap>
    );
  }
}

export default Layout;
