// creating an array of the different kinds of the cards, 
//then giving the name as suit and doing this at the start of the program 
const suits = ["spade","heart","dimond","club"]; 
//then we are creating the cards for each group,thsi too will be written in the array 
// and this will be written at the start of the program 
const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack", 
    "queen", 
    "queen"
];
// then we are going to makae an empty array for carfs
let deck= []; 
// creating a for loop that will create a deck of cards 
for (let i =0;i<suits.length;i++) 
{
    for(let x=0;x<values.length;x++)
    {
        let card = {Value:values[x],Suits:suits[i]};
        deck.push(card);
    }
}

for (let i =deck.length-1;i>0;i--)
{
    let j = Math.floor (Math.random()*i); 
    let temp = deck[i]; 
    deck[i]=deck[j]; 
    deck[j]=temp;
}
console.log('the first five cards are:')

for (let i=0;i<5;i++)
{
    console.log(`${deck [i].Value} of ${deck[i].Suit}`);
}

