import { makeStyles, Paper, Typography } from "@material-ui/core"
import dbz from "../images/dbz6.jpg"
import logo from "../images/Tap4.JPG"
import StarsIcon from "@material-ui/icons/Stars"

const Banner = () => {
    const classes = useStyles()
    return (
       <>
         <Paper variant="outlined" square elevation={0} className={classes.banner}>
            <div className={classes.titleContainer}>
               <Typography variant="h6" className={classes.title}>
                    Obtené tus cupones y participá en concursos por <span style={{color: "#ea5933"}}>Increíbles Premios</span>
                    <StarsIcon className={classes.icon} fontSize="small"></StarsIcon>
                    <StarsIcon className={classes.icon} fontSize="small"></StarsIcon>
                    <StarsIcon className={classes.icon} fontSize="small"></StarsIcon>
                    <StarsIcon className={classes.icon} fontSize="small"></StarsIcon>
                    <StarsIcon className={classes.icon} fontSize="small"></StarsIcon>
                    <StarsIcon className={classes.icon} fontSize="small"></StarsIcon>
                    <StarsIcon className={classes.icon} fontSize="small"></StarsIcon>
               </Typography>
               <img src={logo} alt="logo" className={classes.logo} />
            </div>
         </Paper>
       </>
    )
}

export default Banner

const useStyles = makeStyles((theme)=>({
    banner: { 
      width: "inherit",
      height: "55vh",
      backgroundImage: `url(${dbz})`,  
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center center",
      color: "#fff",
      fontWeight: "bold",
      position: "relative",

    },
    titleContainer:{
        background: "#000",
        opacity: 0.8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right:0,

    },
    logo:{
        width: "6rem",
        height: "auto",
        padding: theme.spacing(3),
    },  
    title:{
        padding: theme.spacing(2)
    },
    icon:{
        verticalAlign: "middle",
        margin: theme.spacing(0,1),
        color: "#ea5933",
    },
    [theme.breakpoints.down("sm")]:{
        title: {
            fontSize:"1rem"
        },
        logo: {
            width: "4rem"
        }
    }   


}))
