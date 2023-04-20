var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");


// Update the current slider value (each time you drag the slider handle)
function update() {
  sliderOutput.textContent = slider.value;
}