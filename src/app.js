const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const cryptoRouter = require("./routers/crypto");
const app = express();
const port  = process.env.PORT | 3000;


//middleware
app.use(express.json());

//define router
app.use(cryptoRouter);

//to set view engine
app.set("view engine","hbs");
app.set("views",path.join(__dirname,"../templates/views"));

//register path to partials
hbs.registerPartials(path.join(__dirname,"../templates/partials"));

app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
})