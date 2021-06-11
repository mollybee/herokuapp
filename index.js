const dotenv = require("dotenv").config();
const express = require("express");
const app = express()
const cors = require("cors")
const port = process.env.PORT || 9000 //This is saying, if there's an enviroment variable named PORT, use that, otherwise, use 9000. Heroku  has the PORT environment variable.

app.use(cors());

app.use("/api/",(_,res)=>{    //the underscore is placeholder, since you don't need the req, because order still matters, in that res needs to be 2nd
    res.json({data:"The API is serving data"}) //Here is where you would put in the actual API data
})

app.listen(port,()=>{
    console.log(`server is alive on ${port}`)
});


//Set up your environment variables
console.log(__dirname)//this is dynamic variable that will work in any environment
console.log(__filename)
console.log(process.env.USERNAME)//This is a predefined environment variable
console.log(process.env.PORT) //This will log as undefined at first because it hasn't been defined by me yet

console.log(process.env.FOOD)//Testing the made variables
