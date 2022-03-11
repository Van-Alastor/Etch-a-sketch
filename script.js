let randomColor = () => {
  let letters = "0123456789ABCDEF"
  let assignColor = "#"

  for(i=0; i < 6; i++) {
    assignColor += letters[Math.floor(Math.random() * 16)];
  }

  return assignColor;
}


let container = document.querySelector(".container");

let createDivs = () => {


  

  for(i=0; i < 256; i++) {
    let newDivs = document.createElement("div");
    newDivs.textContent = "";
    newDivs.setAttribute('id', 'news'); 
    container.appendChild(newDivs);

  }

}

createDivs();


const first = document.querySelectorAll("#news");

first.forEach ((cell) => {

  cell.addEventListener("mouseover", () => {

    cell.style["background-color"] = randomColor();

  }) 

})