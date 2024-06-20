import React from "react";
import { AppBar, Toolbar, typography } from "@mui/material";

const Appbar = () => {

    return(

        <AppBar position="static">
            <toolbar>
                <typography variant="h6">
                    FRACCIONAMIENTOS
                </typography>
            </toolbar>
        </AppBar>
    );
};

export default Appbar;