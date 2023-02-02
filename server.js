const express = require("express");

const app = express();

const port = process.env.port || 5000;

app.get('/',(req,res)=>{
    res.send('this is working');
})

app.listen(5000, (error) => {
	if (error) throw error;
	console.log("server is running on port " + port);
});
