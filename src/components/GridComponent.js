import React from "react";
import { Grid, Box } from "@mui/material";

const GridComponent = ()=> {

    return(

        <Grid container spacing={5}  justifyContent='center' alignItems='center'>
    <Grid item xs={12} md={6} lg={3} bgcolor={'blue'}  justifyContent='center' alignItems='center'>
        <Box height={100} bgcolor={'primary.main'} display={'flex'} justifyContent='center' alignItems='center'>Caja Uno</Box>
    </Grid>
    <Grid item xs={12} md={6} lg={3} bgcolor={'pink'} display={'flex'} justifyContent='center' alignItems='center'>
        <Box height={100} bgcolor={'secondary.main'} display={'flex'} justifyContent='center' alignItems='center'>Caja Dos</Box>
    </Grid>
    <Grid item xs={12} md={4} lg={3} bgcolor={'red'}  justifyContent='center' alignItems='center'>
        <Box height={100} bgcolor={'error.main'} display={'flex'} justifyContent='center' alignItems='center'>Caja Tres</Box>
    </Grid>
    <Grid item xs={12} md={8} lg={3} bgcolor={'orange'} display={'flex'} justifyContent='center' alignItems='center'>
        <Box height={100} bgcolor={'warning.main'} display={'flex'} justifyContent='center' alignItems='center'>Caja Cuatro</Box>
    </Grid>
</Grid>



    );
};

export default GridComponent;