import { makeStyles, Paper, Typography } from "@material-ui/core"
//import { Button } from '@material-ui/core'
import Button from '@material-ui/core/Button'


const Presentation = () => {
    const classes = useStyles()
    return (
        <>
        <Paper  elevation="14" square className={classes.Presentation}>
            <Typography variant="subtitle1" paragraph gutterBottom>
                Call to action 
                Clickee ya 👉 obtenga su <span style={{fontSize:30, fontWeight: 'bold'}}> cupon </span> de descuento 80% !!!!!!
            </Typography>
            <div className={classes.action}>
              <Button color="primary" variant="contained">Haga Click Aqui</Button>
            </div>
        </Paper>
        
        </>
    )
}

export default Presentation

const useStyles = makeStyles((theme)=>({
    Presentation: { 
      width: "inherit",
      padding: theme.spacing(2),
      
    

    },
    action: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& button:hover":{
            backgroundColor: "#ccc !important"
        }
    }
}))