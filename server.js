var express = require('express');

var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);

var path = require('path');
//Static file declatation
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

app.listen(PORT, (req, res) => console.log(`App listing on ${PORT}`));
