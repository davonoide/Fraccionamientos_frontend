import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



const Appbar = ({handleDrawerToggle}) => {

    return(

        <AppBar position="static">
            <Toolbar>
                <IconButton 
                    color ="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}>
                    <MenuIcon/>
                        </IconButton>
                <Typography variant="h6">
                    FRACCIONAMIENTOS
                </Typography>
                <Button color="inherit" style={{marginLeft:'auto'}}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Appbar;