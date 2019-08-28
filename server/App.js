const express = require('express');
const cors = require('cors');
const Route = require('./router')

const app = express();
app.use(cors());

app.get('/', Route);

app.listen(5000, ()=> {
  console.log('server listen on 5000');
})