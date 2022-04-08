const path = require('path')
require('dotenv').config()
const mockAPIResponse = require('./mockAPI.js')

const express = require('express')
const app = express()

app.use(express.static('dist'))

console.log(__dirname)
// Confirm env file is accessible.
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
