//=============================================
// Dependencies
//=============================================

const express = require('express');
const app = express();

const port = process.env || 3200;

app.listen(port, function(){
	console.log("App is listening on port: " + port);
});


