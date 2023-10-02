// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function applyRandomDistort(min, max) {

  // Get all elements with the class 'distort'
  const distortedElements = document.getElementsByClassName('distort');

  // Loop through each element and apply random transformations
  for (const element of distortedElements) {
    const randomRotation = getRandomNumber(-max, max); // Random rotation between -0.25 and 0.25 degrees
    const randomSkewX = getRandomNumber(-max, max); // Random skew on X-axis between -0.1 and 0.1 degrees
    const randomSkewY = getRandomNumber(-max, max); // Random skew on Y-axis between -0.1 and 0.1 degrees

    // Apply the random transformations to the current element
    element.style.transform = `rotate(${randomRotation}deg) skew(${randomSkewX}deg, ${randomSkewY}deg)`;
  }
}

function applyRandomCuts() {
  // Get all elements with the class 'cut'
  const cutElements = document.getElementsByClassName('cut');

  // Loop through each element and apply random clip-path values
  for (const element of cutElements) {
    // Generate random clip-path values within specified limits
    const randomPoints = [];
    for (let i = 0; i < 8; i++) {
      const x = getRandomValue(5, 95); // Random x-coordinate (between 5% and 95%)
      const y = getRandomValue(1, 99); // Random y-coordinate (between 1% and 99%)
      randomPoints.push(`${x}% ${y}%`);
    }
    const clipPathValue = `polygon(${randomPoints.join(', ')})`;

    // Apply the random clip-path value to the current element
    element.style.webkitClipPath = clipPathValue;
    element.style.clipPath = clipPathValue;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Your code here
  applyRandomDistort(0, 0.25);
  applyRandomCuts();
});