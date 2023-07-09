/*
 Create a new instance of IntersectionObserver with the following ingredients:
 'entries' means 'IntersectionObserverEntry[]' which refers to the default Array of Elements being observed,
 'observer' means that this IntersectionObserver() instance will be accessible to be addressed inside this function!
*/
let observer = new IntersectionObserver((entries, observer) => {
  //Because there are multiple entries and the observer only takes one target at a time to observe, we must go forEach!
  entries.forEach(entry => {
    //if our entry is intersecting with the viewport, runs the following code block '{...}'
    if (entry.isIntersecting) {
      console.log('Element has Intersected with the Viewport!');
      // Remove the "zeroOpacity" class from the target element and log to the console if successful.
      entry.target.classList.remove('zeroOpacity');
      console.log(entry.target + ' ' + 'no longer has the class "loadAnimatedImage and is unobserve"');
      // Stop observing the target element:
      observer.unobserve(entry.target); 
    }//end of 'if' statement
    });//end of forEach()
},//end of callback Function '(entries, observer) => {}'
{ rootMargin: "-100px"});//optional parameters '{rootMargin: "-100px"}' which acts as padding before Element is observed! 
// declare the Elements that have the class 'observedStuff' to be addressed as 'observedStuff':
let observedStuff = document.querySelectorAll('.observedStuff');
// Observe the Elements that have the class 'observedStuff' using forEach because there is more than one:
observedStuff.forEach(element => {
  observer.observe(element);
});



(function iifeClickEventListenerToCircles() {

/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let purple = document.getElementById('purple');
let purpleRectangle = document.getElementById('purpleRectangle');
purple.addEventListener('click', () => {
  //when clicked, toggle the class for both...
  purpleRectangle.classList.toggle('show');
  purple.classList.toggle('circleWhileShown');
  //...and remove the class for every other element:
  greenRectangle.classList.remove('show');
  green.classList.remove('circleWhileShown');
  redRectangle.classList.remove('show');
  red.classList.remove('circleWhileShown');
  turquoiseRectangle.classList.remove('show');
  turquoise.classList.remove('circleWhileShown');
});

/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let green = document.getElementById('green');
let greenRectangle = document.getElementById('greenRectangle');
green.addEventListener('click', () => {
  //when clicked, toggle the class for both...
  greenRectangle.classList.toggle('show');
  green.classList.toggle('circleWhileShown');
  //...and remove the class for every other element:
  purpleRectangle.classList.remove('show');
  purple.classList.remove('circleWhileShown');
  redRectangle.classList.remove('show');
  red.classList.remove('circleWhileShown');
  turquoiseRectangle.classList.remove('show');
  turquoise.classList.remove('circleWhileShown');

});

/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let red = document.getElementById('red');
let redRectangle = document.getElementById('redRectangle');
red.addEventListener('click', () => {
  //when clicked, toggle the class for both...
  redRectangle.classList.toggle('show');
  red.classList.toggle('circleWhileShown');
  //...and remove the class for every other element:
  purpleRectangle.classList.remove('show');
  purple.classList.remove('circleWhileShown');
  greenRectangle.classList.remove('show');
  green.classList.remove('circleWhileShown');
  turquoiseRectangle.classList.remove('show');
  turquoise.classList.remove('circleWhileShown');
});

/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let turquoise = document.getElementById('turquoise');
let turquoiseRectangle = document.getElementById('turquoiseRectangle');
turquoise.addEventListener('click', () => {
    //when clicked, toggle the class for both...
    turquoiseRectangle.classList.toggle('show');
    turquoise.classList.toggle('circleWhileShown');
    //...and remove the class for every other element:
    purpleRectangle.classList.remove('show');
    purple.classList.remove('circleWhileShown');
    greenRectangle.classList.remove('show');
    green.classList.remove('circleWhileShown');
    redRectangle.classList.remove('show');
    red.classList.remove('circleWhileShown');
});

})();



(function iifeArrivalOfBubbles() {
  setTimeout(wrapperArrival, 200);
  setTimeout(purpleArrival, 500);
  setTimeout(greenArrival, 800);
  setTimeout(redArrival, 1100);
  setTimeout(turquoiseArrival, 1400);

  function wrapperArrival() {
    const wrapper = document.getElementById('wrapperSkills');
    wrapper.classList.remove('loadAnimated');
  }

  function purpleArrival() {
    const purple = document.getElementById('purple');
    purple.classList.remove('loadAnimated');
  };

  function greenArrival() {
    const green = document.getElementById('green');
    green.classList.remove('loadAnimated');
  };

  function redArrival() {
    const red = document.getElementById('red');
    red.classList.remove('loadAnimated');
  };

  function turquoiseArrival() {
    const turquoise = document.getElementById('turquoise');
    turquoise.classList.remove('loadAnimated');
  };
})();



//declare both Elements and add an event listener which toggles the class zeroOpacity
let imgMoi = document.getElementById('imgMoi');
let textMoi = document.getElementById('textMoi');
imgMoi.addEventListener('click', () => {
  textMoi.classList.toggle('zeroOpacity');
});



