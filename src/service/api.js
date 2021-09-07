import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'f002af6a32cea5da2460c7166178194b'

export const getData = async (city, country)=>{
   return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}