import { Box, Button, TextField, makeStyles } from "@material-ui/core"
import { useEffect, useState } from "react";
import { getData } from "../service/api"
import Information from "./Information";
const useStyles = makeStyles({
    component: {
        padding: 10,
        display: 'flex',
        background: '#445A6F'
    },
    input: {
        color: '#fff',
        marginright: 15
    },
    labelRoot: {
        fontSize: 15,
        color: '#fff'
    },
    button: {
        width: 150,
        height: 40,
        background: '#e67e22',
        color: '#fff',
        marginTop: 5
    }
})
const Form = () => {
    const classes = useStyles();
    const [data, getWeatherData] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [click, handleClick] = useState(false);

    useEffect(() => {
        const getWeather = async () => {
            city && await getData(city, country).then(response => {
                getWeatherData(response.data)
            })
        }
        getWeather();
        handleClick(false);
    }, [click]);

    const handleCityChange = (value) => {
        setCity(value)
    }
    const handleCountryChange = (value) => {
        setCountry(value)
    }
    return (
        <>
            <Box className={classes.component}>
                <TextField
                    inputProps={{ className: classes.input }}
                    label="City"
                    onChange={(e) => handleCityChange(e.target.value)}
                    className={classes.input}
                    InputLabelProps={{
                        classes: { root: classes.labelRoot }
                    }}
                />
                <TextField
                    inputProps={{ className: classes.input }}
                    label="Country"
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className={classes.input}
                    InputLabelProps={{
                        classes: { root: classes.labelRoot }
                    }}
                />
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={() => handleClick(true)}
                >
                    Get Weather
                </Button>
            </Box>
            <Information data={data} city={city} country={country} />
        </>
    )
}

export default Form;