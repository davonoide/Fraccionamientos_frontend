import React from "react";
import Appbar from "../components/AppBar";
import Sidebar from "../components/SideBar";
import MapComponent from "../components/MapComponent";

import { Box, Typography } from "@mui/material";

const HomePage = () => {

    return(
        <Box sx={{display:'flex'}}>
            <Appbar></Appbar>
            <Sidebar></Sidebar>
            <Typography variant="h3" gutterBottom>
                Bienvenido
            </Typography>
            <MapComponent></MapComponent>
        </Box>
    );
};

export default HomePage;