
const https = require('http').Server()

https.on('error', error => {
  console.error(error);
})
https.listen(3000, _ => {
  console.error('ok');
})
https.on('request', (request, response) => {
  console.error('request2');

  response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
  response.write('data6')
  response.end()
})