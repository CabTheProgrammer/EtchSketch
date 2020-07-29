// This is for the 'pixel' divs? Idk, I'm keeping it as pixels
let pixelSize = 1;

const container = document.querySelector('#Sandbox');
const resize = document.querySelector('#resize');
const clear = document.querySelector('#clear');

// going to use this function to erase the old grid
function reset() {    
    container.innerHTML = "";//Yup this works!
    console.log("Reset Called");
}


function divcreate(divSize) {
    let string = "auto ";
    if(container.childElementCount != 0)
    reset();
    
    for (var diff = 1; diff < (+divSize); diff++) {
        string += "auto ";
    }
    //for loop to generate divs
    for (var count = 0; count < (+divSize) ** 2; count++) {

        let n_div = document.createElement('div')
        n_div.className = "blank";
        n_div.textContent = "You Can Make IT!";
        n_div.addEventListener('mouseenter',() =>n_div.className = "hilight")
        container.appendChild(n_div);

    }
    container.style.setProperty('--columnNum', string)
    console.log("DivCreate Called!");
    

}


clear.addEventListener('click', () => { divcreate(pixelSize) })
resize.addEventListener('click', () => { pixelSize = prompt("What's the size of the grid?"); divcreate(pixelSize); })



divcreate(pixelSize);