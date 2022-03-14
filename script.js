let randomColor = () => {
  let letters = "0123456789ABCDEF"
  let assignColor = "#"

  for(i=0; i < 6; i++) {
    assignColor += letters[Math.floor(Math.random() * 16)];
  }

  return assignColor;
}

let sizeSelector = () => {
  let grid = parseInt(prompt("Enter the size of the grid:"));
  

  container.style["grid-template-rows"] =  `repeat(${grid}, 1fr)`;
  container.style["grid-template-columns"] = `repeat(${grid}, 1fr)`;

  return (grid * grid);

}

let container = document.querySelector(".container");

let createDivs = () => {

  let result = sizeSelector();
  
  for(i=0; i < result; i++) {
    let newDivs = document.createElement("div");
    newDivs.textContent = "";
    newDivs.setAttribute('id', 'news'); 
    container.appendChild(newDivs);

  }

}

createDivs();


const creation = document.querySelectorAll("#news");

creation.forEach ((cell) => {

  cell.addEventListener("mouseover", () => {

    cell.style["background-color"] = randomColor();

  }) 

})

let reset = document.querySelector("#reset");


creation.forEach ((cell) => {

  reset.addEventListener("click", () => {

    cell.style["background-color"] = "white";

  }) 

})







