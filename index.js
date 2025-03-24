const farmAnimals = 'cow horse sheep pig chicken';

const animalSounds = {
  moo: 'cow', 
  neigh: 'horse', 
  baa: 'sheep', 
  oink: 'pig', 
  cluck: 'chicken' 
 }

 const{moo, neigh, baa, oink, cluck } = animalSounds

console.log(moo, neigh, baa, oink, cluck )


const animals = {
  bessie: 'cow',
  dolly: 'sheep',
  babe: 'pig',
  little: 'chicken'
}


const{bessie, dolly, babe, little} = animals
console.log(bessie, dolly, babe, little)

const animalColors = {
  blackAndWhite: 'cow',
  black: 'sheep',
  pink: 'pig',
}

const{blackAndWhite, black, pink} = animalColors
console.log(blackAndWhite, black, pink)

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;
const [r, o, y, g, b, indg, v] = rainbowColors

console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, v)


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// ✅ Destructure job, partner, and other values correctly
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// ✅ Destructure nestedJob and nestedPartner
const { nestedJob, nestedPartner } = nestedMuppet;

// ✅ Deep destructuring to extract song2 and song4
const { 
  album: { 
    theMuppetMovie: { song2, song4 } 
  } 
} = nestedMuppet;

// ✅ Export all required variables
module.exports = { muppetName, color, song, job, partner, song2, song4, nestedJob, nestedPartner };

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner