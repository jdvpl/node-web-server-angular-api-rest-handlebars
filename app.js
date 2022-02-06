const http=require('http');


http.createServer((req, res) => {
  // res.writeHead(200,{'Content-Type': 'application/json'});

  res.setHeader('Content-Disposition', 'attachment; filename="lista.csv"')
  res.writeHead(200,{'Content-Type': 'application/csv'});
  const persona={
    id:2,
    name:'saitama'
  }
  // res.write(JSON.stringify(persona));
  res.write('id; nombre\n');
  res.write('1; Saitama\n');
  res.write('2; genos\n');

  
  res.end()
}).listen(8080)

