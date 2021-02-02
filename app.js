const express = require('express')
const app = express()

//css
app.use(express.static(__dirname + '/public'))


//route to handle the home request
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/work', (req, res) => {
    res.sendFile(__dirname + '/views/work.html')
})

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html')
})
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html')
  })
app.listen(3000)