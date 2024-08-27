const container = document.querySelector(".grid");
addButton();
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    for(let i = 0; i < 16; i++){
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        row.appendChild(box);
    }
}

addEventListenerToBoxes();

function createGrid(){
    container.innerHTML = "";
    addButton();
    for (let i = 0; i < rowsAndColumns; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        container.appendChild(row);
        for(let i = 0; i < rowsAndColumns; i++){
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            row.appendChild(box);
        }
    }

    addEventListenerToBoxes();
}


function addButton(){
    container.innerHTML = "<div><button>Change grid dimensions</button></div>";
    const button = document.querySelector("button");
    button.addEventListener("click", function(e){ 
            let newDimensions = prompt("New dimensions: ");
            rowsAndColumns = newDimensions;
            createGrid();
        }
    );
}

function addEventListenerToBoxes(){
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mousemove", function(e){ e.target.style.background = "red"; });
    }
}

