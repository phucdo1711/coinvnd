import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { MenuList, MenuItem } from 'material-ui/Menu';

// import classes from './Drawer.scss';
import DashBoard from 'material-ui-icons/Dashboard';
import ShoppingCart from 'material-ui-icons/ShoppingCart'
import color from 'styles/_colors.scss';
import {Link} from 'react-router';
import Menu from 'material-ui/Menu/Menu';

const list = [
    {
        name: 'DashBoard',
        icon: <DashBoard />,
        link: '/dashboard'
    },
    {
        name: 'Invest',
        icon: <ShoppingCart />,
        link: '/invest'
    }
]

const styles = theme => ({
    color: {color: 'rgb(10, 63, 107)'},
});

export const ListMenu = ({ classes, activePath } ) => {
    return (
        <div >
            <MenuList>
                {list.map((item, index) => (
                    <MenuItem component={Link} to={item.link} key={index}
                    >
                        <ListItemIcon className={activePath === item.link ? classes.color : ""}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}  classes={activePath === item.link ? { text: classes.color } : {}}/>
                    </MenuItem>
                ))}
            </MenuList>
        </div>
    )
}

ListMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    activePath: PropTypes.string.isRequired
};

export default withStyles(styles)(ListMenu);