import { makeStyles } from "@material-ui/core"


const Layout = ({children}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

export default Layout


const useStyles = makeStyles((theme)=>({
    root: { 
        display: "flex",  // Lo pone horizontal
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "115vh",
        margin: theme.spacing(2)  //Margen contra la pantalla

    }
}))