import express from "express";
const app = express();
const port = 3000;


app.get("/" , ( req , res) => {
  res.send("<h1>The Home Page</h1>");
})

app.listen( port , ( req , res) => {
  console.log(`The Server is Listening on port ${port}`);
})