import {Box, makeStyles} from '@material-ui/core'
import Form from './Form'
import Image from '../images/bgg.jpg';
const useStyles = makeStyles({
    component : {
        height : '100vh',
        display : 'flex',
        alignItems : 'center',
        width : '65%',
        margin : '0 auto'
    },
    leftContainer : {
        backgroundImage : `url(${Image})`,
        height : '80%',
        width : '30%',
        backgroundSize : 'cover',
        borderRadius : '20px 0 0 20px'
    },
    rightContainer : {
        background : 'linear-gradient(to right, #e743c3, #e67e22)',
        height : '80%',
        width : '100%',
    }
})
const Weather = ()=>{
    const classes = useStyles();
    return (
        <Box className = {classes.component}>
           <Box className = {classes.leftContainer}></Box>
           <Box className = {classes.rightContainer}>
           <Form />
           </Box>
        </Box>
    )
}
export default Weather;