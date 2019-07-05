import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { connect } from 'react-redux';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

sideDrawerClosedHandler = () => {
  this.setState({showSideDrawer: false});
}

sideDrawerToggleHandler = (prevState) => {
  this.setState((prevState) => {
    return {showSideDrawer: !prevState.showSideDrawer}
  });
}

  render() {
    return (
      <Aux>
        <Toolbar 
        isAuth={this.props.isAuthenticated}
        drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
        isAuth={this.props.isAuthenticated}
        closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

// export const mapDispatchToProps = dispatch => {
//   return {
//     onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
//   };
// };

export const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps, null)(Layout);
