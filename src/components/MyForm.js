import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from "@material-ui/core"
import Snackbar from "./SnackBar";


export default function FormDialog() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dni, setDni] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const[sucess, setSucess] = React.useState(false);

  
  const [errorName, setErrorName] = React.useState(false);
  const [errorLastName, setErrorLastName] = React.useState(false);
  const [errorDni, setErrorDni] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPhone, setErrorPhone] = React.useState(false);

  const [errMessageName, setErrMessageName] = React.useState('')
  const [errMessageLastName, setErrMessageLastName] = React.useState('')
  const [errMessageDni, setErrMessageDni] = React.useState('')
  const [errMessageEmail, setErrMessageEmail] = React.useState('')
  const [errMessagePhone, setErrMessagePhone] = React.useState('')


  const handleClickOpen = () => {
    setOpen(true);
    
  };
  
  const handleClose = (e) => {
    setOpen(false);
    setName('')
    setLastName('')
    setDni('')
    setEmail('')
    setPhone('')
   
  };
  const handleRegister = (e) => {
    setOpen(false);
    e.preventDefault()
    alert(`Nombre: ${name}\nApellido: ${lastName}\nDni: ${dni}\nEmail: ${email}\nTelefono: ${phone}`)
    setName('')
    setLastName('')
    setDni('')
    setEmail('')
    setPhone('')
    setSucess(true)
    
  };

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  const validPhone = new RegExp(
    '^[0-9\b]+$'
  );

  const validDni = new RegExp(
    // Dni Solo Numeros y longitud 8
    '(^([0-9]{7,7})|^)$'
  );
 
 // setSucess(false)

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Llená tus datos aquí
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribite!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>Anotate para recibir tu Cupon de promoción de Tap</div>
            <div>Completá tus datos para que te avisemos cuando esté disponible. Además, participás por premios de hasta $5.000.</div>
          </DialogContentText>
          
          {/* NOMBRE */}
          <TextField
            onChange= { 
              (e) => { 
                setName(e.target.value)
                if(name.length < 2){
                  setErrorName(true)
                  setErrMessageName("El nombre debe tener mas de 2 caracteres")
                }else{
                  setErrorName(false)
                  setErrMessageName('')
                }
              }
            }
            className={classes.field}
            autoFocus
            required
            variant='outlined'
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            error={errorName}
            helperText={errMessageName}
          
          />
          {/* APELLIDO */}
           <TextField
            onChange={(e) => {setLastName(e.target.value)
            if(lastName.length < 2){
              setErrorLastName(true)
              setErrMessageLastName("El Apellido debe tener mas de 2 caracteres")
            }else{
              setErrorLastName(false)
              setErrMessageLastName('')
            }
            }}
            required
            variant='outlined'
            margin="dense"
            id="lastName"
            label="Apellido"
            type="text"
            fullWidth
            error={errorLastName}
            helperText={errMessageLastName}
          />
          {/* DNI */}
            <TextField
             onChange= { 
              (e) => { 
                setDni(e.target.value)
                if(!validDni.test(dni)){
                  setErrorDni(true)
                  setErrMessageDni("El Dni debe Numérico y de 8 caracteres")
                }else{
                  setErrorDni(false)
                  setErrMessageDni('')
                }
               }
             }
            required
            variant='outlined'
            margin="dense"
            id="dni"
            label="DNI"
            type="text"
            fullWidth
            error={errorDni}
            helperText={errMessageDni}
          />
          {/* EMAIL */}
            <TextField
            onChange= { 
              (e) => { 
                setEmail(e.target.value)
                if(!validEmail.test(email)){
                  setErrorEmail(true)
                  setErrMessageEmail("Formato del Email Inválido")
                }else{
                  setErrorEmail(false)
                  setErrMessageEmail('')
                }
              }
            }
            required
            variant='outlined'
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            error={errorEmail}
            helperText={errMessageEmail}
          />
          {/* TELEFONO */}
          <TextField
             onChange= { 
              (e) => { 
                setPhone(e.target.value)
                if(!validPhone.test(phone)){
                  setErrorPhone(true)
                  setErrMessagePhone("El telefono debe ser numérico")
                }else{
                  setErrorPhone(false)
                  setErrMessagePhone('')
                }
               }
             }
            required
            variant='outlined'
            margin="dense"
            id="phone"
            label="Telefono"
            type="text"
            fullWidth
            error={errorPhone}
            helperText={errMessagePhone}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleRegister} color="primary">
            Anotarme
          </Button>
        </DialogActions>
      </Dialog>
     {
        sucess ? <Snackbar></Snackbar> : ''
      } 


    </div>
  );
}


const useStyles = makeStyles((theme)=>({
  field: { 
    

  }
}))