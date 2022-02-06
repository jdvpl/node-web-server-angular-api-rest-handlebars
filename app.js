const express = require("express");
require("dotenv").config();

const app=express();
const port=process.env.PORT || 3000;
app.get('/', (req, res)=>{
  res.send('Hola kisama')
})
app.get('/hola', (req, res)=>{
  res.send('Hola saitama')
})
app.get('*', (req, res)=>{
  // comodin para las pagians que no eisten
  res.send('Error de pagina, no existe !!!')
})

app.listen(port, ()=>{
  console.log(`Escuchando en el puerto ${port} en http://localhost:${port}`);
})