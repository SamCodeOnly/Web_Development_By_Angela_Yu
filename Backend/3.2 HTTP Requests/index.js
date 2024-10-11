import express from "express";

const app = express();
const port = 3000;


app.get("/" , ( req , res ) => {
  // console.log(req);
  res.send("<h1>Welcom To Home Page</h1>")
})

app.listen( port , () => {
  console.log(`The Server is running on port ${port}`);
})