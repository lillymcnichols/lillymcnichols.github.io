const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpg', `pic2.jpeg`, `pic3.jpg`, `pic4.jpeg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : 'Picture of the ocean hitting a rock with blue tones',
  'pic2.jpg' : 'Boat going through Lake Powell with orange rock tones',
  'pic3.jpg' : 'Sunset over Lake Wakatipu in Queenstown, New Zealand',
  'pic4.jpg' : 'Sunset over the Gulf of Mexico',
  'pic5.jpg' : '0.5 picture of redwood trees'
}

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
}

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });