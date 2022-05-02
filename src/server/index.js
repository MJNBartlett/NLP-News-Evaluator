// Initialises and configures dotenv for use of .env file.
require('dotenv').config()

const FormData = require('form-data'); //Required for FormData usage.
const fetch = require('node-fetch') //Required for fetch request - node-fetch@2 reqiured version.

const path = require('path')
const mockAPIResponse = require('./mockAPI.js')

const express = require('express')
const app = express()


//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

// Confirm env file is accessible.
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
  console.log("Recieved GET Request");
  //Passing res variable in order to place res.send() method in async function.
  getSentiment(res)
  console.log("Ran function, sent response");
})


async function getSentiment(res){
  const urlEntered = 'https://mjnbartlett.github.io/Blog-Project/coming-soon.html';
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("url", urlEntered);
  formdata.append("lang", "en");

  //Boilerplate options provided by MeaningCloud API
  const requestOptions = {method: 'POST', body: formdata, redirect: 'follow'};
  const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)

  try{
    let status = response.status
    let responseBody = await response.json()

    console.log(status)
    res.send(responseBody);

  }catch(error){
    console.log('error', error)
  }
}
