var startButtonEl = document.getElementById("start");
var scoresButtonEl = document.getElementById("scores");
var watchEl = document.getElementById("watch");
var myScoreEl = document.getElementById("myScore");

startButtonEl.addEventListener("click", function(){
    var link = document.createElement('a');
    link.setAttribute("href", "quiz.html");
    console.log(link);
    startButtonEl.appendChild(link); 

    
});

scoresButtonEl.addEventListener("click", function(){
    
    
    
});

