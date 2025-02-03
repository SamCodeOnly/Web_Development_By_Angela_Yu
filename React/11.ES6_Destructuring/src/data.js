const animal = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirments: {
      food: 2,
      water: 3,
    },
  },
  {
    name: "dog",
    sound: "woof",
    breed: [
      "Labrador Retriever",
      "Golden Retriever",
      "Poodle"
    ]
  }
]

function useAnimal() {
  return (
    [
      animal.name,
      function () {
        console.log(animal.sound);
      }
    ]
  )
}


export default animal;
export { useAnimal };