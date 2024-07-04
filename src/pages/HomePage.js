import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h4">Bienvenido a la Página Principal</Typography>
      {/* Aquí puedes añadir el contenido de tu página principal */}
    </Box>
  );
};

export default HomePage;
