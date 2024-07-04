import React from "react";
import { Box, Grid } from '@mui/material';

const Dashboard = () => {

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Box sx={{ width: 250 }} >Sidebar</Box>

            <Box sx={{ flexGrow: 1 }} >
                <Box sx={{ height: 64, bgcolor: 'secondary:main' }}>Header</Box>
                <Box sx={{ p: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: 'error:main' }}  >Caja1</Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>Caja2</Box>
                        </Grid>
                        <Grid item xs={12} md={6}>

                            <Box>Caja3</Box>
                        </Grid>


                    </Grid>

                </Box>
                <Box xs={12} md={6}>Footer</Box>
            </Box>
            
        </Box>
    );
}
export default Dashboard;