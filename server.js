const express = require('express');
const app = express() //Calling express as a function sets up server


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.listen(3030); //use port 3000 generally