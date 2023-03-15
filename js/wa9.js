

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



const storyText = 'It was 60 fahrenheit and raining cats and dogs and flooding the streets, so :insertx: went for a swim. When they got in the water at :inserty:, they stared in horror for a few moments, then :insertz:. Jerry was surrounded by a bunch of soggy cats and dogs that had just fallen from the sky, but was not surprised — :insertx: weighs 1 million pounds, and it was wet outside.';
const insertX = ['Donny the Dino', 'Vicky the Vampire', 'Scooby Doo'];
const insertY = ['Chipotle', 'top of Mount Everest', 'Sea World'];
const insertZ = ['ran up a mountain', 'spontaneously became invisible', 'turned into an armadillo and rolled away'];




randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Jerry', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(1000000*0.0714286)} stone`;
    const temperature =  `${Math.round((60-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('60 fahrenheit', temperature);
    newStory = newStory.replaceAll('1 million pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


 


 