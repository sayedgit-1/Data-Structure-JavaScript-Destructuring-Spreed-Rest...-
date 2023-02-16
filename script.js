'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`;
  },

  // ES6 enhanced litterls
  openingHours,

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

/* 
🔖🔖🔖🔖🔖🔖 DESTRUCTURING 🔖🔖🔖🔖🔖🔖
// Example : with array Destructuring

const arr = [2, 3, 4];

// const a = a[0]
// const b = a[1]
// const c = a[2]

const [x, y, z] = arr;

console.log(x, y, z);


//🦋
// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first, , second] = restaurant.categories; // the dot in the middle will escape the middle element
// console.log(first, second);

// Switching Variavles 👉 with from an index to other
let [main, secondary] = restaurant.categories;
console.log(main, secondary, ': without switching');

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary, ' : after switch');

//or

[main, secondary] = [secondary, main];
console.log(main, secondary, ' : after switch');

//Receving 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, 'And', mainCourse);

// Practice Excercise
const nested = [2, 4, [5, 6]];

const [a, , [i, j]] = nested;
console.log(a, i, j);

// Default Values
// const [p, q, r] = [5, 6];
// console.log(p, q, r);

const [p, q = 1, r = 1] = [5, 6];
console.log(p, q, r);

*/

/*
  🔖🔖🔖🔖🔖 THE SPREED OPERATOR 🔖🔖🔖🔖🔖

// spreed operator adds the ELEMENTS of the array to to new array

const arr = [5, 6, 7];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // this prints simply the elements of the new array

// Craeteing new menu from the resturent menu

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// const starterMenuCopy = [...restaurant.starterMenu];
// console.log(starterMenuCopy);

// const menu = [...mainMenuCopy, ...starterMenuCopy];
// console.log(menu);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables : array,strings,sets,maps but not objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

// console.log(`${...str} abcdds`) // this will not work in this case

// Ordering pasta by calling the function
const ingredients = [
  prompt("Let's Make Pasta!!! Ingredient 1 ?"),
  prompt(' Ingredient 2 ?'),
  prompt('Ingredient 3 ?'),
];
console.log(ingredients);

console.log(restaurant.orderPasta(...ingredients));

// Objects
const newResturent = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guisepie',
};
console.log(newResturent);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy);
console.log(restaurantCopy.name);

*/

/*
  🔖🔖🔖🔖🔖 REST OPERATOR 🔖🔖🔖🔖🔖


// SPREED because on right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr); // (4) [1, 2, 3, 4]

// REST because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others); // 1 2 (4) [3, 4, 5, 6]

const [pizza, , risto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions (rest arguments)
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5, 6);
add(2, 3, 2, 3, 4, 5, 6, 7);

const x = [23, 7, 20];
add(...x);

// Method calling

restaurant.orderPizza('Mashrooms', 'Onion', 'Tomato', 'Spnich', 'Garlic');

*/

/*
🔖🔖🔖🔖🔖🔖 Short Circuitng 🔖🔖🔖🔖🔖🔖 

//-------------------OR----------------------------------

// Incase of || opereator , It will always return the first true value
console.log(3 || 'Hello');
console.log('Tumi' || 'Moi');
console.log('Hello' || 10);
console.log(true || 0);
console.log(false || 1);
console.log('' || 'jonas');
console.log(undefined || null);
console.log(undefined || '' || 0 || null || 'hello' || 23);

// restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

//or

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

//------------------------ AND --------------------------------

// incase of and operator if the firt value is falsy it will return the falsy value
console.log(0 && 'hello');
console.log(3 && 'Hello');
console.log(undefined && true);
console.log(undefined && false);
console.log(null && undefined);
console.log('hello' && 23 && null && undefined);

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mashroom', 'Spnich');
}

restaurant.orderPizza && restaurant.orderPizza('Mashroom', 'Spnich');

*/

/*
🔖🔖🔖🔖🔖🔖🔖 NULLISH COALASHING 🔖🔖🔖🔖🔖🔖🔖🔖


// restaurant.numGuest = 0;
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

//Nullish : null and undefined (it will return null or undefined if and only a value is null or undefined)
// It works like or operator , and consider null and undefined as falsy value

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

let a = 12;
// const x = undefined ?? a; // 12
const x = false ?? a; // false 
console.log(x);

*/

/*
  🔖🔖🔖🔖🔖 Practice 🔖🔖🔖🔖

const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'Lapino Pizzia',
  owner: 'Brevely',
};

//OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//Nullish assignment operator(null and undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// And asignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

///////////////////////////////////////
// 🔖🔖🔖Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [player1, player2] = game.players;
console.log(player1);
console.log(player2);

//2
const [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);

//3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//4
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

//5
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is likely to win ');
*/

/*
  🔖🔖🔖🔖🔖🔖 Array LOOPING 


// for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item of menu) console.log(item);
for (const item of menu.entries()) console.log(item);
for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);
*/

/*
  🔖🔖🔖🔖🔖 OPTIONAL CHAINING 🔖🔖🔖🔖🔖🔖

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with optional chaining
// returns undefined if doest not exist

console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); // undefined
console.log(restaurant.openingHours.fri?.open); //11

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'false';
  console.log(`on ${day} opens at : ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist ');
console.log(restaurant.orfnfder?.(0, 1) ?? 'Method does not exist ');

//Arrays

// const users = [{ name: 'Jonas', email: 'hello@gmail.com' }];
const users = [];

console.log(users[0]?.name ?? 'User Array is empty');
*/

/*
  🔖🔖🔖🔖🔖🔖🔖🔖🔖 Looping Objects 🔖🔖🔖🔖🔖🔖🔖🔖


//Property Names
const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat'] // Objec.key() resturn of array of keys 

let openStr = `We are open on ${properties.length} days : `;

for (const day of properties) {
  openStr += `${day} ,  `;
}

console.log(openStr); // 'We are open on 3 days : thu ,  fri ,  sat ,  '

// Property Values
const values = Object.values(openingHours);
console.log(values); // (3) [{…}, {…}, {…}] // Will reaturn an array of values of the object keys

//Entrie object
const entries = Object.entries(openingHours);
// console.log(entries); // (3) [Array(2), Array(2), Array(2)]

//[key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} , we are opened at ${open} and closed at ${close} `);
}
*/

/*
🔖🔖🔖🔖 Challenge #2 🔖🔖🔖🔖

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const entries = game.scored.entries();
// for (const x of entries) {
//   console.log(x);
// }

//key value
for (const [key, value] of entries) {
  console.log(`Goal ${key + 1} : ${value}`);
}

// 2.
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  // console.log(odd);
  average += odd;
}
average /= odds.length;
console.log(average, 'avarage');

// 3 .
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

/*
  🔖🔖🔖🔖🔖🔖Sets 🔖🔖🔖🔖🔖🔖🔖🔖🔖


const orderSet = new Set(['Pasta', 'Pizza', 'Ristro', 'Pizza', 'Pasta']);
console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Ristro'}

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('BBQ'));
orderSet.add('Bread');
orderSet.delete('Pasta');
console.log(orderSet);

for (const order of orderSet) console.log(order);

//example :
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter'];

const stuffUniqe = [...new Set(staff)];
console.log(stuffUniqe);

console.log(new Set('SayedArifulHoque').size);
*/

/*
  🔖🔖🔖🔖🔖🔖🔖 Map Fundamentals 🔖🔖🔖🔖🔖

const rest = new Map();
rest.set('name', 'Clasicano Itaniano');
rest.set(1, 'Frankfut');
rest.set(2, 'London');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 9)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are closed :(

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
*/

/*
🔖🔖🔖🔖🔖 Workiong with String 🔖🔖🔖🔖🔖🔖

✈️ Split()
 - split() method returns a string into an array of substrings.
 - split() method returns the new array.
 - split() method doesn't change the original string.

✈️join()
  -The join() method returns an array as a string.
  -The join() method does not change the original array.
  -Any separator can be specified. The default is comma (,).



console.log('a+very+nice+song'.split('+')); // ['a', 'very', 'nice', 'song']
console.log('Sayed Ariful Hoque'.split(' ')); // ['Sayed', 'Ariful', 'Hoque']

const [firstName, lastName] = 'Sayed Ariful Hoque'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Sayed ARIFUL

const capitalizeName = function (name) {
  const names = name.split(' ');
  const upperCase = [];

  for (const n of names) {
    upperCase.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(upperCase.join(' '));
};

capitalizeName('An de mortaz');

//Padding
const massage = 'Go to gate 23!';
console.log(massage.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log('Jonas'.padStart(25, '+')); // ++++++++++++++++++++Jonas
console.log(massage.padEnd(25, '+')); // Go to gate 23!+++++++++++
console.log('Jonas'.padEnd(25, '+')); //Jonas++++++++++++++++++++

const maskCreditCard = function (numbers) {
  const str = numbers + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(73782686812763));
console.log(maskCreditCard(15151));
console.log(maskCreditCard(4544544545114444));

// Repeat
const message2 = 'Bad weather... All Departments Delayed';

console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} Planes in line ${'✈️'.repeat(n)}`);
};
planeInLine(5);
planeInLine(12);
planeInLine(3);
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
