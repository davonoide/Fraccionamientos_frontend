import React from "react";
import { Grid, Box } from "@mui/material";

const GridComponent = () => {
    return (
        <Grid container spacing={1} >
            <Grid item xs={12} md={6}>
                <Box sx={{ height: 100, bgcolor: 'primary.main' }} >Caja 1</Box>
            </Grid>
            <Grid item  xs={12} md={6} >
                <Box sx={{ height: 100, bgcolor: 'secondary.main' }} >Caja 1</Box>
            </Grid>
            <Grid item  xs={6} md={4}  >
                <Box sx={{ height: 100, bgcolor: 'error.main' }} >Caja 1</Box>
            </Grid>
            <Grid item xs={6} md={8}>
                <Box sx={{ height: 100, bgcolor: 'warning.main' }} >Caja 1</Box>
            </Grid>

        </Grid>
    );
};
export default GridComponent;