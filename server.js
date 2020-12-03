var express = require('express')
// var bodyParser = require('body-parser')

var admin = require('firebase-admin')

var serviceAccount = require('./lfgg-89dc7-firebase-adminsdk-fwu04-d3ae3b3c01.json')

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://lfgdatabase-8b49f.firebaseio.com'
})


//Creates isntance of express
var app = express()

app.set('view engine','ejs')

app.use(express.static('views'))
app.set('views',__dirname + '/views')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false}))


//Create auth middleware
function isAuthenticated(request, response, next){
  // is user logged in or not
}

app.get('/', function(request, response){

  response.render('home.ejs')
})

app.get('/board', isAuthenticated, function(request, response){
  response.render('board.ejs')
})

  app.post('/', function(request, response){
      // response.render('home.ejs')

  })

var port = 8080

app.listen(port, function(){
  console.log('App running on port ' + port)
})