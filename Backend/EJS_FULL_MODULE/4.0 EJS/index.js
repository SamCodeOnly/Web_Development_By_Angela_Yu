import express from "express";

const app = express();
const port = 3000;

const day = new Date();
let today = day.getDay();

let workDayOrFunDay = "";
let weekendOrWeekday = "";

function workdayOrFunDay( req , res , next){
  if (today === 0 || today === 6){
    workDayOrFunDay = "have Fun!";
    weekendOrWeekday = "Weekend";
  }else {
    workDayOrFunDay = "work hard!";
    weekendOrWeekday = "Weekday";
  }
  next();
}


app.use(workdayOrFunDay)
app.get("/" , ( req , res) => {
  res.render("index.ejs" , { dayType: weekendOrWeekday, advice: workDayOrFunDay });
})

app.listen( port , () => {
  console.log(`The Server is running on port ${port}`);
})