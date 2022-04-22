# INSTRUCTIONS FOR USING exercise_mongodb.js

# SAMPLE IMPORT  
Note: Automatic na siyang cumoconnect sa cloud database. Iadjust nalang ung url sa mismong code if ever man gagawa ng bagong database.

const db = require(__dirname + "/exercise_mongodb.js");

# SAMPLE DATA  

let data1 = {
    exercise: "Jumping Jack",
    counter: 20,
}

let data2 = {
    time_start: "4:30 PM",
    time_end: "5:30 PM",
    verdict: "Bad"
}

# INPUTTING DATA 

db("Exercise",data1);

db("Posture",data2);

# FETCHING DATA 

async function start(){
    let data = await db("Fetch","Exercise");
    console.log(data);
}

start();