import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PropTypes from 'prop-types';


export default function AvatarList({ avatarimage, avatarname, avatarmessage }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={avatarname} src={avatarimage} />
        </ListItemAvatar>
        <ListItemText
          primary={avatarname}
          secondary={
            <React.Fragment>
              
              {avatarmessage}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
     
    </List>
  );
}

AvatarList.propTypes = {
    avatarimage: PropTypes.number.isRequired,
    avatarname: PropTypes.number.isRequired,
    avatarmessage: PropTypes.number.isRequired,
  };