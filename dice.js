// display the correct number of dice - adjust number of cards
// How to do it -
// 	1) Put a listener on each radio and adjust the inner HTML of the main container for whichever one is clicked to display the right number of die

const addDice = '<div class="card"><img src="img/one.png" class="card-img mx-auto dice"></div>';

$("#inlineRadio1").change(()=>{
	if ($("#inlineRadio1").prop({checked: true})) {
	$(".card-deck").html(addDice);}});

$("#inlineRadio2").change(()=>{
	if ($("#inlineRadio2").prop({checked: true})) {
	$(".card-deck").html(addDice+addDice);}});

$("#inlineRadio3").change(()=>{
	if ($("#inlineRadio3").prop({checked: true})) {
	$(".card-deck").html(addDice+addDice+addDice);}});



// listen for a click of the button

// on click generate random number from 1-6

// display the correct dice images for the numbers generated

