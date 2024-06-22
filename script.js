const container = document.getElementById("container");
const pala = document.getElementById("pala");
const bandiera = document.getElementById("bandiera");
let scava = true;
let primoClick = true;
let array = [];
let vals = [];
let buttons = [];
let nums = [-17,-16,-15,-1,+1,+15,+16,+17];
let gameOver = false;

pala.addEventListener("click" , () =>{if(!scava){pala.style = "float: left;border: 2px solid black;"; bandiera.style = "float: right;border: 2px solid white;"; scava = true}});
bandiera.addEventListener("click" , () =>{if(scava){pala.style = "float: left;border: 2px solid white;"; bandiera.style = "float: right;border: 2px solid black;"; scava = false}})

container.style = " width: 500px;margin-left:auto;margin-right: auto;margin-top:180px;";

addEventListener("DOMContentLoaded", () => {
    let button;
    for (let i = 0; i < 33; i++) {
        let num;
        do {
            num = parseInt((Math.random() * 191));
        } while (array.includes(num));

        array.push(num);
    }
    let cont = 0;
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 16; j++) {
            let div = document.createElement("div");
            button = document.createElement("button");
            button.style = "width: 100%; height:100%;";
            button.id = cont;
            button.addEventListener("click", click)
            vals.push(checkBombs(button))
            buttons.push(button);


            div.style = "border: 1px solid gray; width:6.252% ; height: 31px; float:left;";
            div.appendChild(button);
            container.appendChild(div);
            cont++;
        }
    }

})

function checkBombs(ind){
    let cont = 0;
    if(array.includes(parseInt(ind.id))){
        cont = -1;
    }
    else{
        for(let i of nums){
            if(ind.id == 0 || ind.id == 16|| ind.id == 32 || ind.id == 48 || ind.id == 64 || ind.id == 80 || ind.id == 96 || ind.id == 112 || ind.id == 128 || ind.id == 144 || ind.id == 160 || ind.id == 176) {
                if(i == -16 || i == -15 || i == +1 || i == 16 || i == 17){
                    if(array.includes(parseInt(ind.id) + i) ){
                        cont++;
                    }
                }
            }
            else if(ind.id == 15|| ind.id == 31|| ind.id == 47 || ind.id == 63 || ind.id == 79 || ind.id == 95 || ind.id == 111 || ind.id == 127 || ind.id == 143 || ind.id == 159 || ind.id == 175 || ind.id == 191){
                if(i == -16 || i == -17 || i == -1 || i == 16 || i == 15){
                    if(array.includes(parseInt(ind.id) + i) ){
                        cont++;
                    }
                }
            }
            else{
                if(array.includes(parseInt(ind.id) + i) ){
                    cont++;
                }
            }
            
        }
    }
    
    return cont;
}

function click(b){
    scoperta(b.target);    
}

function scoperta(b){
    if(!gameOver){
        if(scava){
            b.classList.add("clicked");
            if(!vals[parseInt(b.id)] == 0){
                if(vals[parseInt(b.id)] == -1){
                    let f = b.parentNode;
                    f.innerHTML = "";
                    f.style = "border: 1px solid gray; width:6.252%; height: 31px; float: left; background-color: darkgray";;
                    img = document.createElement("img");
                    img.style = "width:100%; height: 100%; border: 2px solid black";
                    img.src = "./img/Bomba.png";
                    f.appendChild(img)
                    morte();
                    gameOver = true;
                }
                else{
                    b.innerHTML = vals[parseInt(b.id)]
                    console.log(parseInt(b.innerHTML))
                    switch(parseInt(b.innerHTML)){
                        case 1: b.classList.add("uno"); break;
                        case 2: b.classList.add("due"); break;
                        case 3: b.classList.add("tre"); break;
                        case 4: b.classList.add("quattro"); break;
                        case 5: b.classList.add("cinque"); break;
                        default: b.classList.add("dopo"); break;
                    }
                }
            }
            if(vals[parseInt(b.id)] == 0){
                for(let i of nums){
                    if(vals[parseInt(b.id) + i] != null){
                        ind = b;
                        button = document.getElementById(parseInt(b.id) + i)
                        if(ind.id == 0 || ind.id == 16|| ind.id == 32 || ind.id == 48 || ind.id == 64 || ind.id == 80 || ind.id == 96 || ind.id == 112 || ind.id == 128 || ind.id == 144 || ind.id == 160 || ind.id == 176) {
                            if(i == -16 || i == -15 || i == +1 || i == 16 || i == 17){
                                if(vals[parseInt(b.id) + i] != 0){
                                    button.innerHTML = vals[parseInt(b.id) + i];
                                    button.classList.add("clicked");
                                    switch(vals[parseInt(b.id) + i]){
                                        case 1: button.classList.add("uno"); break;
                                        case 2: button.classList.add("due"); break;
                                        case 3: button.classList.add("tre"); break;
                                        case 4: button.classList.add("quattro"); break;
                                        case 5: button.classList.add("cinque"); break;
                                        default: button.classList.add("dopo"); break;
                                    }
                                }
                                else{
                                    button.innerHTML = "";
                                    button.classList.add("inter")
                                }
                            }
                        }
                        else if(ind.id == 15|| ind.id == 31|| ind.id == 47 || ind.id == 63 || ind.id == 79 || ind.id == 95 || ind.id == 111 || ind.id == 127 || ind.id == 143 || ind.id == 159 || ind.id == 175 || ind.id == 191){
                            if(i == -16 || i == -17 || i == -1 || i == 16 || i == 15){
                                if(vals[parseInt(b.id) + i] != 0){
                                    button.innerHTML = vals[parseInt(b.id) + i];
                                    button.classList.add("clicked");
                                    switch(vals[parseInt(b.id) + i]){
                                        case 1: button.classList.add("uno"); break;
                                        case 2: button.classList.add("due"); break;
                                        case 3: button.classList.add("tre"); break;
                                        case 4: button.classList.add("quattro"); break;
                                        case 5: button.classList.add("cinque"); break;
                                        default: button.classList.add("dopo"); break;
                                    }
                                }
                                else{
                                    button.innerHTML = "";
                                    button.classList.add("inter")
                                }
                            }
                        }
                        else{
                            if(vals[parseInt(b.id) + i] != 0){
                                button.innerHTML = vals[parseInt(b.id) + i];
                                button.classList.add("clicked");
                                switch(vals[parseInt(b.id) + i]){
                                    case 1: button.classList.add("uno"); break;
                                    case 2: button.classList.add("due"); break;
                                    case 3: button.classList.add("tre"); break;
                                    case 4: button.classList.add("quattro"); break;
                                    case 5: button.classList.add("cinque"); break;
                                    default: button.classList.add("dopo"); break;
                                }
                            }
                            else{
                                button.innerHTML = "";
                                button.classList.add("inter")
                            }
                        }                
                    }
                }
                controllo();
            }
        }
        else{
            let f = b.parentNode;
            f.innerHTML = "";
            f.style = "border: 1px solid gray; width:6.252%; height: 31px; float: left; background-color: #F0F0F0";;
            img = document.createElement("img");
            img.id = b.id;
            img.addEventListener("click", function(){ 
                let f = this.parentNode;
                f.innerHTML = "";
                f.appendChild(buttons[parseInt(this.id)]);
            });
            img.style = "width:100%; height: 100%; border: 2px solid black";
            img.src = "./img/Bandiera.png";
            f.appendChild(img)
        }
    }
}

function controllo(){
    for(let i = 0; i < 191; i++){
        if(document.getElementById(i).classList == "inter" && document.getElementById(i).innerHTML == ""){
            scoperta(document.getElementById(i));
        }
    }
}

function morte(){
    for(let i = 0; i < 191; i++){
        if(vals[i] == -1){
            b = document.getElementById(i);
            if(b != null){
                let f = b.parentNode;
                f.innerHTML = "";
                f.style = "border: 1px solid gray;  width:6.252%; height: 31px; float: left; background-color: darkgray";;
                img = document.createElement("img");
                img.style = "width:100%; height: 100%; border: 2px solid black";
                img.src = "./img/Bomba.png";
                f.appendChild(img)
            }
            
        }
    }
}