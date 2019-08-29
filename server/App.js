const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const router = require('../router/main')(app);



app.listen(5000, ()=> {
  console.log('server listen on 5000');
})