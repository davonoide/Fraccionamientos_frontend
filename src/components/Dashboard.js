import React from "react";
import { Box,Grid } from "@mui/material";


const DashBoard = () => {

    return(


        <Grid container spacing={0}>
            <Grid item xs={12} md={12} lg={12}>
            <Box height={50} bgcolor={'secondary.main'} display={'flex'} justifyContent='center' alignItems='center'>Header</Box>
            </Grid>
            <Grid item xs={12} md={3} lg={1}>
            <Box height={50} bgcolor={'blue'} display={'flex'} justifyContent='center' alignItems='center' >SideBar</Box>
            </Grid>
            
            <Grid container height={500} xs={12} md={9} lg={11} bgcolor={'primary.main'}  justifyContent='center' alignItems='center' >
                <Grid item xs={12} md={12} lg={4}>
                    <Box bgcolor={'yellow'} height={50} display={'flex'} justifyContent='center' alignItems='center' >Caja Uno</Box>
                    </Grid>
                    <Grid item xs={12} md={7} lg={4}>
                    <Box bgcolor={'green'} height={50} display={'flex'} justifyContent='center' alignItems='center' >Caja Dos</Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4}>
                    <Box bgcolor={'gray'} height={50} display={'flex'} justifyContent='center' alignItems='center' >Caja Tres</Box>
                    </Grid>
                
            </Grid>
            <Grid item xs={12} md={12} lg={12} bgcolor={'error.main'} justifyContent='center' alignItems='center' display={'flex'}>
                <Box>Footer</Box>
            </Grid>
        </Grid>

    );

};

export default DashBoard;