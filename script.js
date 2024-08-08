console.log("Script running...")
// Task 1: Button One Flow
// Select the first button
let Button1 = document.querySelector("#buttonOne")

// Select the first p tag under that button
let Fp = document.querySelector("#buttonOne")

// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"
Button1.addEventListener("click", function(event){
  Fp.textContent = "you guessed worng"
})


// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags

let buttonT = document.querySelector("#id1")

let Sp = document.querySelector("#id2")


// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"

buttonT.addEventListener("click", function(event){
  Sp.textContent= "you Guessed Right"
})

// Task 3: Dog image flow
// Select the dog image

let DI = document.querySelector("#dog")
// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click
DI.addEventListener("mouseover", function(event){
  DI.src = "post-boop.png"
})



// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this

DI.addEventListener("mouseout", function(event){
  DI.src = "post-boop.png"
})





// Task 4: Secret code flow
// Select the input

let IP = document.querySelector("#code")




// Add an event listener to the input such that when a key is pressed, you console log the value
IP.addEventListener("keypress",function(event){
  console.log(InputEvent.value)

})

// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)




