const express = require('express');

const port =5000;
const cors = require('cors');
const app = express();

const allowedDomains = ["http://localhost:3000", "http://localhost:4000", "http://localhost:6000"]



const axios = require('axios');

app.use(
    cors({
      origin: allowedDomains,
      credentials: true
    })
  )
app.get('produto/all', (req,res,next) => {
   
    try{
        console.log(res)
        const response = axios.get(`http://localhost:8080/`)
        res.json(response)
        res.send(response)
        console.log(response)
    }catch(err){
        res.status(500).json(err.response ? err.response.data : err.message)
    }



})


app.listen(port)
console.log('Server listening...')