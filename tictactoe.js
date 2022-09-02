//Weapons Array
var weapon = ["Images/stone.png", "Images/paper.png", "Images/scissors.png"];
var card = ["R", "P", "S"];
var j = 100, k = 100;

var userProgress = document.querySelector("#user-progress");
var UserProgressVal = document.querySelector("#user-progress-val");
var userWeapon = document.querySelector("#user-weapon");
var userCol = document.querySelector(".user-col");
var computerProgress = document.querySelector("#computer-progress");
var computerProgressVal = document.querySelector("#computer-progress-val");
var computerWeapon = document.querySelector("#computer-weapon");
var computerCol = document.querySelector(".computer-col");
var buttonsLen = document.querySelectorAll(".weaponBtn").length;
var weaponBtn = document.querySelector(".weapon-btn");

//Points Initalize
var user_points = 0;
var computer_points = 0;
var Final_name = "Player";


//-----------------------------------------------------------------------------------------


// Taking Player Name
var user_name = prompt("Enter Your Name : ");
Final_name = user_name[0].toUpperCase() + user_name.slice(1);
document.getElementById("user-name").innerHTML = Final_name;

//Random Number Generator
function random(range) {
    var random = Math.floor(Math.random() * range);
    return random;
}

//Getting Score
function getscore(player, computer) {
    if (computer == player) {
        return -1;
    }

    else if ((player == 'R') && (computer == 'S')) {
        return 0;
    }

    else if ((computer == 'R') && (player == 'S')) {
        return 1;
    }

    else if ((player == 'P') && (computer == 'R')) {
        return 0;
    }

    else if ((computer == 'P') && (player == 'R')) {
        return 1;
    }

    else if ((player == 'S') && (computer == 'P')) {
        return 0;
    }

    else if ((computer == 'S') && (player == 'P')) {
        return 1;
    }
}

function setresult(score) {
    if (score == 0) {
        user_points += 10;

        userCol.style.background = "#cefdce";
        computerCol.style.background = "#ffdde0";

        var user_interval = setInterval(() => {
            if (j == user_points) {
                clearInterval(user_interval);
                if (j == 100) {
                    showresult();
                }
            }

            else {
                ++j;
                UserProgressVal.innerHTML = j + "%";
                userProgress.style.width = j + "%";
                setuser_color(user_points);
            }
        }, 50);

    }

    else if (score == 1) {
        computer_points += 10;

        computerCol.style.background = "#cefdce";
        userCol.style.background = "#ffdde0";

        var computer_interval = setInterval(() => {
            if (k == computer_points) {
                clearInterval(computer_interval);
                if (k == 100) {
                    showresult();
                }
            }

            else {
                ++k;
                computerProgress.style.width = k + "%";
                computerProgressVal.innerHTML = k + "%";
                setcomputer_color(computer_points);
            }
        }, 50);

    }

    else {
        computerCol.style.background = "#e5e5e5";
        // document.getElementById("computer-row").style.border = "1px solid #808080";
        userCol.style.background = "#e5e5e5";
        // document.getElementById("user-row").style.border = "1px solid #808080";
    }
}

function setuser_color(i) {
    if (i < 30) {
        userProgress.style.background = "red";
    }
    else if (i < 60) {
        userProgress.style.background = "orange";
    }
    else {
        userProgress.style.background = "green";
    }
}

function setcomputer_color(i) {
    if (i < 30) {
        computerProgress.style.background = "red";
    }
    else if (i < 60) {
        computerProgress.style.background = "orange";
    }
    else {
        computerProgress.style.background = "green";
    }
}


// //----------------------------------------------------------------------------------//

document.querySelector("#start-button").addEventListener("click", function start() {

    document.querySelector(".start-button").style.display = "none";
    weaponBtn.style.display = "block";

    interval = setInterval(() => {
        --j, --k;
        UserProgressVal.innerHTML = j + "%";
        userProgress.style.width = j + "%";
        computerProgress.style.width = k + "%";
        computerProgressVal.innerHTML = k + "%";
        if (j == 0 && k == 0) {
            clearInterval(interval);
        }
    }, 10);

    disable();
}
);


document.querySelector("#rock").addEventListener("click", function rock() {
    //Disabling Button
    disable();

    //Setting user Weapon
    userWeapon.src = weapon[0];

    //setting computer weapon
    var computer_weapon = random(3);
    computerWeapon.src = weapon[computer_weapon];

    //Setting Score
    var score = getscore("R", card[computer_weapon]);

    // Progress Bar
    setresult(score);
});

document.querySelector("#paper").addEventListener("click", function rock() {
    //Disabling Button
    disable();

    //Setting user Weapon
    userWeapon.src = weapon[1];

    //setting computer weapon
    var computer_weapon = random(3);
    computerWeapon.src = weapon[computer_weapon];

    //Setting Score
    var score = getscore("P", card[computer_weapon]);

    // Progress Bar
    setresult(score);
});


document.querySelector("#scissor").addEventListener("click", function rock() {
    //Disabling Button
    disable();

    //Setting user Weapon
    userWeapon.src = weapon[2];

    //setting computer weapon
    var computer_weapon = random(3);
    computerWeapon.src = weapon[computer_weapon];

    //Setting Score
    var score = getscore("S", card[computer_weapon]);

    // Progress Bar
    setresult(score);
});


function showresult() {
    document.getElementById("winner").style.display = "block";
    weaponBtn.style.display = "none";

    if (user_points >= 100) {
        document.getElementById("winner-name").innerText = Final_name + " Won The Match";
        userWeapon.src = "Images/trophy.png";
        computerWeapon.src = "Images/sad.png";
    }

    else if (computer_points >= 100) {
        document.getElementById("winner-name").innerText = "Computer Won The Match";
        userWeapon.src = "Images/sad.png";
        computerWeapon.src = "Images/trophy.png";
    }
}


function disable() {
    for (i = 0; i < 3; i++) {
        document.querySelectorAll(".weaponBtn")[i].disabled = true;
    }
    setTimeout(function () {
        for (i = 0; i < 3; i++) {
            document.querySelectorAll(".weaponBtn")[i].disabled = false;
        }
    }, 500)
}


document.querySelector("#restart-btn").addEventListener("click", function () {
    location.reload();
});


