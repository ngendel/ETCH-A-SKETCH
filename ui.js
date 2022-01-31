const grid = document.getElementsByClassName("gridContainer")[0];
const userInput = document.getElementById("pxQuantity");
const resetButton = document.querySelector(".reset")



makeGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);

    }
};

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty(
      "grid-template-columns",
      `repeat(${userInput.value}, 2fr)`
    );
    grid.style.setProperty(
      "grid-template-rows",
      `repeat(${userInput.value}, 2fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      grid.appendChild(div);
    }
    console.log(userInput.value);
  };

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");

});

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function(){
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    makeGrid();
});

makeGrid()




const colorInput = document.querySelector('input[type=color]')


changeColor = () => {
  grid.style.setProperty(
    "background-color",
   colorInput.value
  )
}


colorInput.addEventListener('change', changeColor);








//Next, when mouse enters div, the div changes background color, and mouse leaves pixelated trail
//as it moves through divs 


//When mouse enters div, div changes color. As mouse moves through div, leave mouse trail. 
