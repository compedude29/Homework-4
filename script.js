var startButtonEl = document.getElementById("start");
var scoresButtonEl = document.getElementById("scores");
var watchEl = document.getElementById("watch");
var myScoreEl = document.getElementById("myScore");

startButtonEl.addEventListener("click", function(){
    startButtonEl.innerHTML = "";
    var link = document.createElement('a');
    link.setAttribute("href", "quiz.html");
    link.innerHTML = "Start Quiz";
    
    console.log(link);
    startButtonEl.appendChild(link); 

    
});

scoresButtonEl.addEventListener("click", function(){
    
    
    
});

