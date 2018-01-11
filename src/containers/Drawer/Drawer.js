import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import classes from "./Drawer.scss";
import ListMenu from './ListMenu';
import classNames from 'classnames';

export const NavDrawer = ({
    account,
    isMenuOpen,
    handleDrawerToggle
  }) => {
    console.log("account: ",JSON.stringify(account))
      return (
        <Drawer
            type="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            open={isMenuOpen}
        >
        {/* {console.log(JSON.stringify(account))} */}
            <div className={classes.drawerInner}>
                <div className={classes.drawerHeader}>
                    <IconButton
                        color="contrast"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}

                    >
                        <MenuIcon
                            nativeColor='black'
                        />
                    </IconButton>
                </div>
                <Divider />
                <ListMenu />
            </div>
        </Drawer>
    )};

export default NavDrawer;