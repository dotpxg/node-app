// const express = require('express');

// //express app
// const app = express();

// //listen for requests
// app.listen(3000, () => {
//     console.log('App listening at Port 3000')
// });

// app.get('/', (req, res) => {

//     res.send('<p> This is a test response!</p>');
// })
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is a Test Response!')
})

app.listen(port,'0.0.0.0',() => {
  console.log(`Example app listening at http://localhost:${port}`)
})
