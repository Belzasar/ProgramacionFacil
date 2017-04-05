var express = require ( 'express' ),
	path = require ( 'path' );


var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.static('public'));

app.get("/", function(req, res){
	res.render("index");
});

var port = Number(8080);

app.listen(port, function(){
	console.log( 'El servidor esta escuchando en http://localhost:'+port );
});