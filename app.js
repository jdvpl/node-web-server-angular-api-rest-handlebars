const express = require("express");
const app=express();
const hbs=require("hbs");
require("dotenv").config();
const port=process.env.PORT || 3000;
// handlebars
// partials
hbs.registerPartials(__dirname + "/views/partials")
// renderizar handlebars
app.set('view engine', 'hbs');
//servir contenido estatico
app.use(express.static('public'))


app.get('/', (req, res)=>{
  res.render('home',{nombre:'Saitama','age':25,titulo:"Curso de Node"})
})
app.get('/elements', (req, res)=>{
  res.render('elements',{nombre:'Kakaroto','age':25,titulo:"Curso de HBS"})
})
app.get('/generic', (req, res)=>{
  res.render('generic',{nombre:'Genos','age':25,titulo:"Curso de Node HBS"})
})
app.get('*', (req, res)=>{
  // comodin para las pagians que no eisten
  res.sendFile(__dirname+'/public/404.html')
})

app.listen(port, ()=>{
  console.log(`Escuchando en el puerto ${port} en http://localhost:${port}`);
})