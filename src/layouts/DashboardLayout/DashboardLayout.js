import React from "react";
import PropTypes from "prop-types";
import Drawer from "containers/Drawer";

import classes from "./DashboardLayout.scss";
import { Notifications } from "modules/notification";
import "styles/core.scss";

import purple from "material-ui/colors/purple";
import green from "material-ui/colors/green";
import indigo from "material-ui/colors/indigo";


const font = '"Open Sans", sans-serif';

export const DashboardLayout = ({ children, location }) => {
  return (
    <div>
      <Drawer location={location}/>
      <div className={classes.children}>{children}</div>
      <Notifications />
    </div>
  )

};

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default DashboardLayout;