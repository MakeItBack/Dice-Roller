// Display the correct dice to match the radio selected

// 	- Define the HTML for each of the 3 dice images - each has a unique id
const addDice1 = '<div class="card"><img src="img/new.png" id="d1" class="card-img mx-auto dice" alt="dice"></div>';
const addDice2 = '<div class="card"><img src="img/new.png" id="d2" class="card-img mx-auto dice" alt="dice"></div>';
const addDice3 = '<div class="card"><img src="img/new.png" id="d3" class="card-img mx-auto dice" alt="dice"></div>';

// Create an array of the image IDs so we can loop through each one individually
let imgIds = ["#d1","#d2","#d3"];

// 	- Put a listener on each radio to detect when changed and if it is 'on' i.e checked
// 	- Adjust the inner HTML of the card deck to add the correct dice (cards) to match the radio selected - 1, 1&2 or all 3 
$("#inlineRadio1").change(()=>{
	if ($(this).prop({checked: true})) {
	$(".card-deck").html(addDice1);
}});

$("#inlineRadio2").change(()=>{
	if ($(this).prop({checked: true})) {
	$(".card-deck").html(addDice1+addDice2);
}});

$("#inlineRadio3").change(()=>{
	if ($(this).prop({checked: true})) {
	$(".card-deck").html(addDice1+addDice2+addDice3);
}});

// listen for a click of the button
// Loop through the dice images and for each one:
// generate a random number from 1-6
// display the correct dice images for the number generated

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
		$(image).addClass('diceRoll');
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
	// set timer to allow animation to run before removing animation class
	window.setTimeout(()=>{$('img').removeClass('diceRoll')}, 550); 
});


// UPGRADES - ideas
	// animation for roll - done
	// Can't press roll button without selecting number of dice first
	// Background image toggler
	// Option to change to 10 sided dice
	// Re-factor!!
	// work on scaling the background image better at different screen sizes - see Mac / retina
	// Mobile optimisation - done
	// Add css prefixes

// What do i need to change to get 10 sided dice
	// Add a toggle / selector on the HTML file - done
	// Need to capture selector setting and update a variable with 6 or 10
	// Update logic with 2 paths based on the variable:
		// need to roll 0-9
		// New images for 0-9 - done

