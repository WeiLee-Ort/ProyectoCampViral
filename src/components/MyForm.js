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

  const [btnDisabledName, setBtnDisabledName] = React.useState(true)
  const [btnDisabledLastName, setBtnDisabledLastName] = React.useState(true)
  const [btnDisabledDni, setBtnDisabledDni] = React.useState(true)
  const [btnDisabledEmail, setBtnDisabledEmail] = React.useState(true)
  const [btnDisabledPhone, setBtnDisabledPhone] = React.useState(true)


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

  const validDni = new RegExp(
    // Dni Solo Numeros y longitud 8
    '(^([0-9]{7,7})|^)$'
  );
 
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
   //'^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
  );

  const validPhone = new RegExp(
    //'^[0-9\b]+$'
    '^[0-9]+$'

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
          
          {/* NOMBRE ***************************************************************/}
          <TextField
            onChange= { 
              (e) => { 
                setName(e.target.value)
                if(e.target.value.length <= 2 && e.target.value != ''){
                  setErrorName(true)
                  setErrMessageName("El nombre debe tener mas de 2 caracteres")
                  setBtnDisabledName(true)
                }else if(e.target.value == ''){
                  setErrorName(true)
                  setErrMessageName('El campo no puede ser vacio')
                  setBtnDisabledName(true)
                }else{
                  setErrorName(false)
                  setErrMessageName('')
                  setBtnDisabledName(false)
                  console.log("1-btnName: " + btnDisabledName)
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
          {/* APELLIDO *************************************************************/}
           <TextField
            onChange={(e) => {setLastName(e.target.value)
            if(lastName.length <= 2 && lastName.length != ''){
              setErrorLastName(true)
              setErrMessageLastName("El Apellido debe tener mas de 2 caracteres")
              setBtnDisabledLastName(true)
            }else if(e.target.value == ''){
              setErrorLastName(true)
              setErrMessageLastName('El campo no puede ser vacio')
              setBtnDisabledLastName(true)
            }else{
              setErrorLastName(false)
              setErrMessageLastName('')
              setBtnDisabledLastName(false)
              console.log("2-btnLastName: " + btnDisabledLastName)
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
          {/* DNI ******************************************************************/}
            <TextField
             onChange= { 
              (e) => { 
                setDni(e.target.value)
                if(!validDni.test(dni)){
                  setErrorDni(true)
                  setErrMessageDni("El Dni debe Numérico y de 8 caracteres")
                  setBtnDisabledDni(true)
                }else if(e.target.value == ''){
                  setErrorDni(true)
                  setErrMessageDni('El campo no puede ser vacio')
                  setBtnDisabledDni(true)
                }else{
                  setErrorDni(false)
                  setErrMessageDni('')
                  setBtnDisabledDni(false)
                  console.log("3-btnDni: " + btnDisabledDni)
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
                
                if(!validEmail.test(e.target.value)){
                  console.log("EMail: " + e.target.value)
                  setErrorEmail(true)
                  setErrMessageEmail("Formato del Email Inválido")
                  setBtnDisabledEmail(true)
                 }else if(e.target.value === ''){
                  setErrorEmail(true)
                  setErrMessageEmail('El campo no puede ser vacio')
                  setBtnDisabledEmail(true) 
                }else{
                  console.log("EMail-else2: " + e.target.value)
                  setErrorEmail(false)
                  setErrMessageEmail('')
                  setBtnDisabledEmail(false)
                  console.log("4-btnEmail: " + btnDisabledEmail)
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
                  console.log("phone1: " + e.target.value)
                  setErrorPhone(true)
                  setErrMessagePhone("El telefono debe ser numérico")
                  setBtnDisabledEmail(true)
                }else if(e.target.value == ''){
                  console.log("Phone2: " + e.target.value)
                  setErrorPhone(true)
                  setErrMessagePhone('El campo no puede ser vacio')
                  setBtnDisabledPhone(true)
                }else{
                  console.log("Phone3: " + e.target.value)
                  setErrorPhone(false)
                  setErrMessagePhone('')
                  setBtnDisabledPhone(false)
                  console.log("5-btnPhone: " + btnDisabledPhone)
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
         {/*  <Button disabled={btnDisabledName || btnDisabledLastName || btnDisabledDni || btnDisabledEmail || btnDisabledPhone } onClick={handleRegister} color="primary">  */}
              <Button disabled={!name || !lastName || !dni || !email || !phone } onClick={handleRegister} color="primary">  
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