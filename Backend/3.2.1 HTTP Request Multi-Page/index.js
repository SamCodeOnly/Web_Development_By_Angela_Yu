import express from "express";

const app = express();
const port = 3000;


app.get("/" , ( req , res) => {
  res.send("Hello World");
 });

 app.get("/about" , (req , res) => {
  res.send("About Page");
 })

 app.get("/contact" , ( req , res) => {
  res.send("Contact Me Page");
 })


app.listen(port , ()=> {
  console.log(`The Server is Listening on port ${port}`);
})