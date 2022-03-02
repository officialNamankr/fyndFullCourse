//console.log("Started the node.js basics");


var http = require("http");
var app = require("./src/app.js")
const PORT = process.env.PORT || 4000




app.listen(PORT,function(){
    console.log("Port started at port "+ PORT);
}); 