import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;



const sidebar = ({mobileOpen, handleDrawerToggle}) =>{

    const drawer = (
        <div>
            <div style={{height:64}}/>
            <Divider/>
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
        </div>
    );

return(

    <nav>
        <Drawer variant="temporary" 
                open={mobileOpen} 
                onClose={handleDrawerToggle} 
                anchor="left">

                {drawer}

        </Drawer>

        <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
        >
                    {drawer}
        </Drawer>
    </nav>

    
);
};

export default sidebar;