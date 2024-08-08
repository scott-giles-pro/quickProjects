const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/flights', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://toronto-pearson-airport.p.rapidapi.com/departures',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
          'x-rapidapi-host': 'toronto-pearson-airport.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data)
        res.json(response.data.slice(0,6))
    }).catch(function (error) {
        console.error(error)
    })
})

app.listen(PORT, () => console.log('running on port ' + PORT))

