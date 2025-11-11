const characters = [
  {
    title: "Ninja",
    emoji: "🥷",
    powers: ["agility", "stealth", "aggression"],
  },
  {
    title: "Sorcerer",
    emoji: "🧙",
    powers: ["magic", "invisibility", "necromancy"],
  },
  {
    title: "Ogre",
    emoji: "👹",
    powers: ["power", "stamina", "shapeshifting"],
  },
  {
    title: "Unicorn",
    emoji: "🦄",
    powers: ["flight", "power", "purity"],
  },
];

// for (let character of characters) {
// console.log(character.title, character.emoji, character.powers)
//   for (let power of character.powers) {
//     console.log(power);
//   }
// }

const fruits = [
  { name: "orange", nutrients: ["vit c", "carbs"] },
  { name: "apple", nutrients: ["vit D", "vitamin b"] },
];

for (let fruit of fruits) {
  //   console.log(fruit.nutrients);
  for (let nutrient of fruit.nutrients) {
    console.log(nutrient);
  }
}
