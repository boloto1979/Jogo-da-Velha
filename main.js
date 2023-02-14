let buttons = document.querySelectorAll(".btn_option");
let board = ["","","","","","","","",""];
let message = document.getElementById("message");
let popup = document.getElementById("popup");


let current_player = "X";
let game_over = false;



for(let i = 0; i < buttons.length; i++) {
    let bnt = buttons[i];
    bnt.addEventListener("click", function(){
        main(bnt);
    })

}

function main(btn) {
    btn.innerHTML = current_player
    board[btn.id - 1] = current_player;
    check();
    change_player();
}

function change_player(bt){
    if(current_player == "O"){
        current_player = "X";
    } else{
        current_player = "O";
    }
}

function check(){
    check_horizontal();
    check_vertical();
    check_diaganal();
    check_draw();
}

function check_horizontal(){
   if(allEqual(board[0], board[1], board[2], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide"); 
        count_points();
        game_over = true       
    } else if(allEqual(board[3], board[4], board[5], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide"); 
        count_points();
        game_over = true  
    } else if(allEqual(board[6], board[7], board[8], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide"); 
        count_points();
        game_over = true  
    } 
}

function check_vertical(){
    if(allEqual(board[0], board[3], board[6], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide"); 
        count_points();
        game_over = true       
    } else if(allEqual(board[1], board[4], board[7], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide"); 
        count_points();
        game_over = true  
    } else if(allEqual(board[4], board[5], board[8], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide"); 
        count_points();
        game_over = true  
    }
}

function check_diaganal(){
    if(allEqual(board[0], board[4], board[8], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide"); 
        count_points();
        game_over = true       
    } else if(allEqual(board[2], board[4], board[6], current_player)){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide"); 
        count_points();
        game_over = true
    }
}

function check_draw(){
    let check_if_exists = board.includes("");
    if(allEqual(board) == false && check_if_exists == false){
        if (game_over != true){
            message.innerHTML = "Draw";
            popup.classList.remove("hide");
            game_over = true;
        }
    }
}


function allEqual(arry){
    const result = arry.every(element => {
        if (element === arry[0]) {
            return true;
        }
    });
    return true;
}

function count_points(){

}
