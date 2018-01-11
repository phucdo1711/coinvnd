import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import classes from './Drawer.scss';

export const ListMenu = () => (
    <div >
        <List>
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button>
                <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
                <ListItemText primary="Spam" />
            </ListItem>
        </List>
    </div>
)

export default ListMenu;