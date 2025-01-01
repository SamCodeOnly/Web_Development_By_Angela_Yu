import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    console.log(result.data.drinks[0]);
    res.render('index.ejs' , { 
      cocktailName: result.data.drinks[0].strDrink,
      cocktailImage: result.data.drinks[0].strDrinkThumb,
      instruction: result.data.drinks[0].strInstructions
    });
  }catch(error) {
    console.log(error.data);
    res.status(error.status);
  }
});



app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});