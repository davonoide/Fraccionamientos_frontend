import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Draw } from "@mui/icons-material";

const sidebar = () =>{

return(

    <Drawer variant="permanent" anchor="left">
        <List>
            <ListItem button component="a" href="/login">
                <ListItemText primary="Login"></ListItemText>

            </ListItem>
            <ListItem button component="a" href="/register">
                <ListItemText primary="Registrar"></ListItemText>
            </ListItem>

            <ListItem button component="a" href="/fraccRegister">
                <ListItemText primary="Registrar Fraccionamiento"></ListItemText>
            </ListItem>
            
        </List>
    </Drawer>
);
};

export default sidebar;