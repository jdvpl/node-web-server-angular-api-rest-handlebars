const express = require("express");
require("dotenv").config();
const port=process.env.PORT || 3000;
const app=express();

//servir contenido estatico
app.use(express.static('public'))


app.get('/hola', (req, res)=>{
  res.sendFile(__dirname +'/public/hola.html')
})
app.get('*', (req, res)=>{
  // comodin para las pagians que no eisten
  res.sendFile(__dirname+'/public/404.html')
})

app.listen(port, ()=>{
  console.log(`Escuchando en el puerto ${port} en http://localhost:${port}`);
})