const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();
app.use(bodyParser.json());



massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
}).catch(err=>console.log(err));

app.get('/api/inventory',controller.read)


const port = process.env.SERVER_PORT||3001
app.listen(port, () =>{console.log(`Server is listening on port ${port}`)})