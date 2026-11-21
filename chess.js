
let board = document.getElementById("board");

for (let i = 1; i <= 8; i++) {

    for (let j = 1; j <= 8; j++) {

        let box = document.createElement("div");  // hamne naya div bnya hai html ke liye

        box.className = "box";   // we are giving css styling 

        if ((i + j) % 2 == 0) {    // aggaar number 2 se divisbile hai rem 0 soo white color otherwise black 
            box.className = "box white";
        }
        else {
            box.className = "box black";
        }

        board.appendChild(box);   // we are using this beacuse we are adding box to html   

    }

}
