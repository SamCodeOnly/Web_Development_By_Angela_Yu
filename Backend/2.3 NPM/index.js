// var generateName = require("sillyname")

// if we use Module Based 
import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);





// Generating a Super Hero Name Challenge
import {randomSuperhero} from 'superheroes';

const name = randomSuperhero();

console.log(`I'm ${name}!`)