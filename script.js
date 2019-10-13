var startButtonEl = document.getElementById("start");
var scoresButtonEl = document.getElementById("scores");
var watchEl = document.getElementById("watch");
var myScoreEl = document.getElementById("myScore");
var highScoreEl = document.getElementById("highScore");

startButtonEl.addEventListener("mouseover", function(){
    
    startButtonEl.setAttribute("onclick", "location.href = 'quiz.html';");
    

});

scoresButtonEl.addEventListener("click", function(){
    
    var points = 100;
    highScoreEl.innerHTML = "High Score: " + points;
    
});




