const express = require("express"); 
const db = require(__dirname + "/exercise_mongodb.js");
const app = express(); 

app.set('view engine','ejs');

app.get("/",function(req,res){ 
    async function start(){
        // FETCH THE DATA FROM THE DATABASE
        let data = await db("Fetch","Exercise");

        // PREPARE CONTAINERS
        dates = [];
        counters = [];
        exercise = "Punch";

        // PUT DATA TO CONTAINERS
        data.forEach((value)=>{
            if(value.exercise==exercise){
                dates.push(value.date);
                counters.push(value.counter);
            }
        })

        // PASS THE DATA TO HTML/EJS FILE
        res.render("main.ejs",{exercise:exercise,date:dates,counter:counters});
    }
    start();
})

app.listen(process.env.PORT || 3000);

// To run:
// nodemon index.js