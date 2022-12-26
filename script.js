
document.querySelector(".add-item-btn").addEventListener("click", () => {

    let input = document.querySelector(".input").value;

    if (input !== "") {


        let newRow = document.createElement("div");
        let container = document.querySelector(".container");
        container.appendChild(newRow);
        newRow.className = "row new-item-row";

        let newCol = document.createElement("div");
        newRow.appendChild(newCol);
        newCol.className = "col-8";

        let newCol2 = document.createElement("div");
        newRow.appendChild(newCol2);
        newCol2.className = "col-4";

        let item = document.createElement("p");
        newCol.appendChild(item);
        item.textContent = input;
        item.className = "items";

        let removeButton = document.createElement("button");
        newCol2.appendChild(removeButton);
        removeButton.className = "remove-item-btn btn btn-outline-dark btn-lg"
        removeButton.textContent = "-";

        document.querySelector(".input").value = "";
        
        removeButton.onclick = function (e) {
    
            // let button = e.target;
            // let col = button.parentElement.closest("div");
            // let row = col.parentElement.closest("div");

            item.classList.toggle("complete");
            
            // row.remove();
    
        }
    }
    else {
        alert("Enter something");
    }



}
);


