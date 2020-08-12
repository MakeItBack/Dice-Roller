// display the correct number of dice - adjust number of cards
// How to do it -
// 	1) Put a listener on each radio and adjust the inner HTML of the main container for whichever one is clicked to display the right number of die

const addDice1 = '<div class="card"><img src="img/new.png" id="d1" class="card-img mx-auto dice"></div>';
const addDice2 = '<div class="card"><img src="img/new.png" id="d2" class="card-img mx-auto dice"></div>';
const addDice3 = '<div class="card"><img src="img/new.png" id="d3" class="card-img mx-auto dice"></div>';

let imgIds = ["#d1","#d2","#d3"];

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
// Loop through the dice images and for each one:
// generate a random number from 1-6
// display the correct dice images for the numbers generated

// $(".btn").click(()=>{
// 	imgIds.forEach((image)=>{
// 		let roll = Math.floor(Math.random()*6)+1;
// 		console.log(image +" rolled "+ roll);
// 		if (roll === 6) {$(image).attr('src', 'img/six2.png')}
// 		else if (roll === 5) {$(image).attr('src', 'img/five2.png')}
// 		else if (roll === 4) {$(image).attr('src', 'img/four2.png')}
// 		else if (roll === 3) {$(image).attr('src', 'img/three2.png')}
// 		else if (roll === 2) {$(image).attr('src', 'img/two2.png')}
// 		else {$(image).attr('src', 'img/one2.png')};
// 	})
// });

// Alternative syntax - the SWITCH STATEMENT

$(".btn").click(()=>{
	imgIds.forEach((image)=>{
		let roll = Math.floor(Math.random()*6)+1;
		console.log(image +" rolled "+ roll);
		switch(roll){
			case 6:
				$(image).attr('src', 'img/six2.png');
				break;
			case 5:
				$(image).attr('src', 'img/five2.png');
				break;
			case 4:
				$(image).attr('src', 'img/four2.png');
				break;
			case 3:
				$(image).attr('src', 'img/three2.png');
				break;
			case 2:
				$(image).attr('src', 'img/two2.png');
				break;
			case 1:
				$(image).attr('src', 'img/one2.png');
				break;
		};	
	})
});


// UPGRADES - ideas
	// animation for roll
	// Can't press roll button without selecting number of dice first
	// Background image toggler
	// change to 10 sided dice
	// Re-factor!!
