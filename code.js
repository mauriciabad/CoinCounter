var http = require("http"),
	fs = require("fs");

var html = fs.readFileSync("./index.html"); //



var funIndex = function(sol, res){
	res.write(html);
	res.end();
};

var servidor = http.createServer(funIndex);

servidor.listen(8080);