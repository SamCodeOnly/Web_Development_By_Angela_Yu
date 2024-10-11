import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

function bandNameGenerator( request , response , next){
  bandName = request.body["street"] + request.body["pet"];
  next();
}


app.get("/" , ( request , response) => {
  response.sendFile( __dirname + "/public/index.html");
})
app.use(bandNameGenerator)
app.post("/submit" , ( request , response) => {
  response.send(` <h1>Your Band Name is</h1> <h2> ${bandName}👌</h2>` );

})

app.listen( port , () => {
  console.log(`Server is running on port ${port}`);
})
