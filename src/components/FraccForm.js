import React, { useState } from 'react';
import axios from 'axios';
import { TextField,Button, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Title } from '@mui/icons-material';


const FraccForm = () => {    
    const [nombreFracc, setNombreFracc] = useState("");
    const [direccion, setDireccion] = useState("");
    const [NumeroCasas, setNumeroCasas] = useState();
    const [tipoFraccionamiento, setTipoFraccionamiento] = useState("");
    const [zonasInteres, setZonasInteres] = useState("");
    const [casasHabitadas, setCasasHabitadas] = useState();
    const [logo, setLogo] = useState(null);

    
    const navigate = useNavigate(); //hook para navegar entre rutas

    const handleCreateFracc = async () =>{

        if(!nombreFracc || !direccion || !NumeroCasas || !tipoFraccionamiento || !zonasInteres || !casasHabitadas){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'Por favor complete todos los campos requeridos'
            });
            return;
        }
        if(isNaN(NumeroCasas)||isNaN(casasHabitadas)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'Numero de casas y casas habitadas deben de ser valores numericos'
            });
            return;
        }
        
        if(parseInt(casasHabitadas) > parseInt(NumeroCasas)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'La cantidad de casas habitadas no puedes ser mayor a la del numero de casas'
            });
            return;
        }

        const formData = new FormData();
        formData.append('nombreFracc',nombreFracc);
        formData.append('direccion',direccion);
        formData.append('NumeroCasas',NumeroCasas);
        formData.append('tipoFraccionamiento',tipoFraccionamiento);
        formData.append('zonasInteres',zonasInteres);
        formData.append('casasHabitadas',casasHabitadas);
        if(logo){
            formData.append('logo',logo);
        }
        
        

        try{
            const response = await axios.post('http://localhost:3001/api/fracc', formData,{headers:{'Content-Type':'multipart/from-data'}});
            Swal.fire({
                icon:'success',
                title:'Fraccionamiento reigistrado con exito',
                text:`Fraccionamiento ${nombreFracc} registrado con exito`
            });
            navigate('/home');
            
        
        }catch(err){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'Error al registrar fraccionamiento'
            });
        }

    } 
    
    return(
        <Box component='form' sx={{mt:1}}>
            <TextField
                margin="normal"
                required 
                fullWidth
                id="nombreFracc"
                label="Nombre de Fraccionamiento"
                name="nombreFracc"
                autoComplete="nombreFracc"
                autoFocus
                value={nombreFracc}
                onChange={(e)=>setNombreFracc(e.target.value)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="direccion"
                label="Direcci'on"
                name="direccion"
                autoComplete="direccion"
                autoFocus
                value={direccion}
                onChange={(e)=>setDireccion(e.target.value)}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                id="NumeroCasas"
                label="Numero Casas"
                name="NumeroCasas"
                autoComplete="NumeroCasas"
                autoFocus
                value={NumeroCasas}
                onChange={(e)=>setNumeroCasas(e.target.value)}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                id="tipoFraccionamiento"
                label="Tipo de Fraccionamiento"
                name="tipoFraccionamiento"
                autoComplete="tipoFraccionamiento"
                autoFocus
                value={tipoFraccionamiento}
                onChange={(e)=>setTipoFraccionamiento(e.target.value)}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                id="zonasInteres"
                label="Zonas de Interes"
                name="zonasInteres"
                autoComplete="zonasInteres"
                autoFocus
                value={zonasInteres}
                onChange={(e)=>setZonasInteres(e.target.value)}
            />

            <TextField
                margin="normal"
                required
                fullWidth
                id="casasHabitadas"
                label="Cantidad de casas Habitadas"
                name="casasHabitadas"
                autoComplete="casasHabitadas"
                autoFocus
                value={casasHabitadas}
                onChange={(e)=>setCasasHabitadas(e.target.value)}
            />

            <input
                type='file'
                accept='image/'
                onChange={(e)=>setLogo(e.target.files[0])}
                style={{marginTop:'1rem', marginBottom:'1rem'}}
            />

            <Button
                fullWidth
                variant='contained'
                sx={{mt:3,mb:2}}
                onClick={handleCreateFracc}
            >
                Crear nuevo Fraccionamiento
            </Button>
        </Box>

    )



}

export default FraccForm;