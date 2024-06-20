import React from "react";
import RegisterForm from "../components/RegisterForm"
import { Box, Typography } from "@mui/material";

const RegisterPage = ()=>{

    return(
        <Box sx={{display:'flex'}}>
            <Box component="main" sx={{flexGrow:1, p:3}}>
                <h1>Registro de usuario</h1>
                <RegisterForm></RegisterForm>

            </Box>
        </Box>
    )
};

export default RegisterPage;