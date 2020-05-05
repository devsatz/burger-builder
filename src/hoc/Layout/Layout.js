import React, { Component } from "react";
import AuxWrap from "../AuxWrap";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

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
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.SideDrawerTogglehandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          closed={this.SideDrawerClosedhandler}
          open={this.state.showSideDrawer}
        />
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </AuxWrap>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
