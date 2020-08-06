// display the correct number of dice - adjust number of cards
// How to do it -
// 	1) Put a listener on each radio and adjust the inner HTML of the main container for whichever one is clicked to display the right number of die

let numDie = 0;
let rolls =[];

const addDice1 = '<div class="card"><img src="img/new.png" id="d1" class="card-img mx-auto dice"></div>';
const addDice2 = '<div class="card"><img src="img/new.png" id="d2" class="card-img mx-auto dice"></div>';
const addDice3 = '<div class="card"><img src="img/new.png" id="d3" class="card-img mx-auto dice"></div>';

$("#inlineRadio1").change(()=>{
	if ($(this).prop({checked: true})) {
	$(".card-deck").html(addDice1);
	numDie = 1;
}});

$("#inlineRadio2").change(()=>{
	if ($(this).prop({checked: true})) {
	$(".card-deck").html(addDice1+addDice2);
	numDie = 2;
}});

$("#inlineRadio3").change(()=>{
	if ($(this).prop({checked: true})) {
	$(".card-deck").html(addDice1+addDice2+addDice3);
	numDie = 3;
}});



// listen for a click of the button
// on click generate 3 random numbera from 1-6
// push the numbers into an array (rolls)

// loop through the array to match the number of die (numDie)
// display the correct dice images for the numbers generated





$(".btn").click(()=>{
	console.log("You clicked the button!");
	console.log(`There are ${numDie} die`);
	let roll1 = Math.floor(Math.random()*6)+1;
	let roll2 = Math.floor(Math.random()*6)+1;
	let roll3 = Math.floor(Math.random()*6)+1;
	console.log(`you rolled a ${roll1} and a ${roll2} and a ${roll3} !`);
	if (roll1 === 6) {$('img').attr('src', 'img/six2.png')}
	else if (roll1 === 5) {$('img').attr('src', 'img/five2.png')}
	else if (roll1 === 4) {$('img').attr('src', 'img/four2.png')}
	else if (roll1 === 3) {$('img').attr('src', 'img/three2.png')}
	else if (roll1 === 2) {$('img').attr('src', 'img/two2.png')}
	else {$('img').attr('src', 'img/one2.png')};
});









// for(let i=0, i )












// UPGRADES
	// animation for roll
	// dice start on page - maybe with question mark
	// or - can't press button without dice
	// Background toggler
	// change to 10 sided dice