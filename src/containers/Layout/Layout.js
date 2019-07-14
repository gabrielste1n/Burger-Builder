import React, { useState } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { connect } from 'react-redux';

const layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

const sideDrawerClosedHandler = () => {
  setSideDrawerIsVisible(false);
}

const sideDrawerToggleHandler = (prevState) => {
  setSideDrawerIsVisible(!sideDrawerIsVisible);
}

  
    return (
      <Aux>
        <Toolbar 
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}/>
        <SideDrawer 
        isAuth={props.isAuthenticated}
        closed={sideDrawerClosedHandler} open={sideDrawerIsVisible}/>
        <main className={classes.Content}>{props.children}</main>
      </Aux>
    );
  }

export const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps, null)(layout);
