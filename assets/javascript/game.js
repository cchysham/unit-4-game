$(document).ready(function () {


    var score = 0;
    var wins = 0;
    var losses = 0;

    var target = Math.floor(Math.random() * 101) + 19;
    var cCrystal = Math.floor(Math.random() * 12) + 1;
    var bCrystal = Math.floor(Math.random() * 12) + 1;
    var gCrystal = Math.floor(Math.random() * 12) + 1;
    var rCrystal = Math.floor(Math.random() * 12) + 1;

    $("#blue").on("click", function () {
        score += bCrystal;
        display();
        checkWin();
    });
    $("#clear").on("click", function () {
        score += cCrystal;
        display();
        checkWin();
    });
    $("#red").on("click", function () {
        score += rCrystal;
        display();
        checkWin();
    });
    $("#green").on("click", function () {
        score += gCrystal;
        display();
        checkWin();
    });

    function checkWin() {
        if (score === target) {
            alert("You won!");
            wins++;
            reset();
            display();
        } else if (score > target) {
            alert("You lost.");
            losses++;
            reset();
            display();
        }
    }

    function reset() {
        score = 0;
        target = Math.floor(Math.random() * 101) + 19;
        cCrystal = Math.floor(Math.random() * 12) + 1;
        bCrystal = Math.floor(Math.random() * 12) + 1;
        gCrystal = Math.floor(Math.random() * 12) + 1;
        rCrystal = Math.floor(Math.random() * 12) + 1;
    }

    function display() {
        $(".target").text("Number to match: " + target);
        $(".score").text("Your score: " + score);
        $(".wins").text("Wins: " + wins);
        $(".losses").text("Losses: " + losses);
    }
    display();
})