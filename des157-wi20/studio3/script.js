var rock = "./rock.png";
var paper = "./paper.png";
var scissors = "./scissors.png";
var reset_pic = "./q_mark.png";
var outcomes = [rock, paper, scissors];
var choice_rock = document.querySelector(".btn_rock");
var choice_paper = document.querySelector(".btn_paper");
var choice_scissors = document.querySelector(".btn_scissors");

var player = document.querySelector(".container_player img");
var computer = document.querySelector(".container_computer img");
var btn_go = document.querySelector(".btn_go");
console.log(typeof computer.src);


choice_rock.addEventListener('click', function() {
    player.src = outcomes[0];
    setTimeout(function() {
        var i = Math.floor(Math.random()*3);
        computer.src = outcomes[i];
        console.log(computer.src);
        console.log(scissors);
    }, 500);

    setTimeout(function() {
        if(computer.src.search('scissors') != -1) {
            alert("You win!");
        } else if(computer.src.search('paper') != -1) {
            alert("Computer wins mang.");
        } else if(computer.src === player.src) {
            alert("Tie!  Try again.");
        }

        player.src = reset_pic;
        computer.src = reset_pic;
    }, 1500);
    
});

choice_paper.addEventListener('click', function() {
    player.src = paper;
    setTimeout(function() {
        var i = Math.floor(Math.random()*3);
        computer.src = outcomes[i];
    }, 500);

    setTimeout(function() {
        if(computer.src.search('rock') != -1) {
            alert("You win!");
        } else if(computer.src.search('scissors') != -1) {
            alert("Computer wins mang.");
        } else if(computer.src === player.src) {
            alert("Tie!  Try again.");
        }

        player.src = reset_pic;
        computer.src = reset_pic;
    }, 1500);
    
});

choice_scissors.addEventListener('click', function() {
    player.src = scissors;
    setTimeout(function() {
        var i = Math.floor(Math.random()*3);
        computer.src = outcomes[i];
    }, 500);

    setTimeout(function() {
        if(computer.src.search('paper') != -1) {
            alert("You win!");
        } else if(computer.src.search('rock') != -1) {
            alert("Computer wins mang.");
        } else if(computer.src === player.src) {
            alert("Tie!  Try again.");
        }

        player.src = reset_pic;
        computer.src = reset_pic;
    }, 1500);
    
});