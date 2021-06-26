// inputs
const foodInput = document.getElementById('food-input');
const adjectiveInput = document.getElementById('adjective-input');
const bodyPartInput = document.getElementById('body-part-input');
const senseInput = document.getElementById('sense-input');
const verbInput = document.getElementById('verb-input');
const timeOfDayInput = document.getElementById('time-of-day-input');
const carrot = document.getElementById('carrot');

//madlibs
const food = document.getElementById('food');
const adjective = document.getElementById('adjective');
const bodyPart = document.getElementById('body-part');
const sense = document.getElementById('sense');
const verb = document.getElementById('verb');
const timeOfDay = document.getElementById('time-of-day');




//event listeners
carrot.addEventListener('click', ()=>{
    food.textContent = foodInput.value;
    adjective.textContent = adjectiveInput.value;
    bodyPart.textContent = bodyPartInput.value;
    sense.textContent = senseInput.value;
    verb.textContent = verbInput.value;
    timeOfDay.textContent = timeOfDayInput.value;
});