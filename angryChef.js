const greeting = ['HEY', 'HELLO', '', 'YO' ];

const names = ['HENRY', 'SUZIE', 'WEBBY', 'LOUIE', 'EDWARD', 'JUAN', 'MIKE', 'NOAH'];

const table = ['1', '32', '74', '70', '10', '40'];

const random = arr => {
   return arr[Math.floor(Math.random() * arr.length)]
};

let randomGreeting = random(greeting);
let randomNames = random(names);
let randomTable = random(table);

const action = ["WHERE'S MY KNIFE", `YOU FORGOT THE BREAD ON TABLE ${randomTable}`, 'THIS TASTE HORRIBLE',
'HOW LONG ON THE FILET', 'DID YOU WHIP THE BUTTER', 'STEAM THE KING CRAB ALREADY', "I DON'T HAVE TIME FOR THIS", 
`TABLE ${randomTable} NEEDS THERE SIDES`, `FIRE TABLE ${randomTable}`, 'WHERE ARE THE SHAVED ALMONDS'];


let randomAction = random(action);


console.log(`${randomGreeting} ${randomNames} ${randomAction}!`);



