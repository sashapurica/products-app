var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/html/hola', function (req, res) {
    res.render('home', {
      user: {
        nombre: req.query.nombre        
    }
    });
});
 
app.listen(3000);