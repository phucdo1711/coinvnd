import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import classes from "./Drawer.scss";
import ListMenu from './ListMenu';
import classNames from 'classnames';
import AccountCircle from 'material-ui-icons/AccountCircle'
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

export const NavDrawer = ({
    isMenuOpen,
    handleDrawerToggle,
    location,
  }) => {
    return (
        <Drawer
            type="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !isMenuOpen && classes.drawerPaperClose),
            }}
            open={isMenuOpen}
        >
            <div className={classes.drawerInner}>
                <div className={classes.drawerHeader}>
                    <div style={{ display: 'inline-block' }}>
                        <Avatar
                            className={!isMenuOpen ? classes.avatar : classes.avatarLarge}
                            src="https://jobseekers.vn/wp-content/themes/sb_theme/assets/images/default_avatar.png" />
                        {/* <AccountCircle />
                        </Avatar> */}
                    </div>
                    <Typography type="title" gutterBottom hidden={isMenuOpen} >
                        {isMenuOpen && 'Phuc Do'}
                    </Typography>
                </div>
                <Divider />
                <ListMenu
                    activePath={location.pathname}
                />
                <div className={classes.drawerFooter}>
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
            </div>
        </Drawer>
    )
};

NavDrawer.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
}
export default withStyles(classes)(NavDrawer);