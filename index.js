const express = require('express')
const app = express()
var cors = require('cors')
const port = 8080;
const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("req body",req.body);
    console.log("req query", req.query);
    res.send("Application is Running");
})

app.post('/', (req, res) => {
    console.log("req body",req.body);
    console.log("req query",req.query);
    res.send("Application is Running");
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})