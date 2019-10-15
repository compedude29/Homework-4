var startButtonEl = document.getElementById("start");
var scoresButtonEl = document.getElementById("scores");
var watchEl = document.getElementById("watch");
var myScoreEl = document.getElementById("myScore");
var highScoreEl = document.getElementById("highScore");

var askEl = document.getElementById("ask");

//an object array containing questions, choices and answers for the quiz
var questions= [
    {
        title: "Which of the following is correct about features of JavaScript?",
        choices: ["JavaScriptis complementary to and integrated with HTML.", "JavaScript is open and cross-platform.", "Both of the above.", "All of the above."],
        answer: "Both of the above."
    },
    {
        title: "Which of the following is a valid type of function JavaScript supports?",
        choices: ["named funciton", "anonymous function", "Both of the above.", "None of the above."],
        answer: "Both of the above."
    },
    {
        title: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        choices: ["getIndex()", "location()", "indexOf()", "None of the above."],
        answer: "indexOf()"
    },
    {
        title: "Which built-in method returns the string representation of the number's value?",
        choices: ["toValue()", "toNumber()", "toString()", "None of the above."],
        answer: "toString()"
    },
    {
        title: "Which of the following functions of String object combines the text of two strings and returns a new string?",
        choices: ["add()", "merge()", "concat()", "append()"],
        answer: "concat()"
    },
    {
        title: "Which of the following function of String object returns a number indicating the whether a reference string comes before or after or is the same as the given string in sort order?",
        choices: ["localeCompare()", "search()", "substr()", "concat()"],
        answer: "localeCompare()"
    },
    {
        title: "Whcih of the following fucntion of String object returns the calling string value converted to lowercase?",
        choices: ["toLocaleLowerCase()", "toLowerCase()", "toString()", "substring()"],
        answer: "toLowerCase()"
    },
    {
        title: "Which of the following function of String object creates an HTML hypertext link that request another URL?",
        choices: ["link()", "sub()", "sup()", "small()"],
        answer: "link()"
    },
    {
        title: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
        choices: ["pop()", "push()", "join()", "map()"],
        answer: "push()"
    },
    {
        title: "Which of the following function of Array objects returns a true if at least one element in this array satisfies the provided testing function?",
        choices: ["reverse()", "shift()", "slice()", "some()"],
        answer: "some()"
    }
    ];
    
//listener event for "Start Quiz" button to go to first question
startButtonEl.addEventListener("mouseover", function(){
    
    startButtonEl.setAttribute("onclick", "location.href = 'quiz.html';");
    //askEl.innerHTML = "ABCDDDD";
    
});
//listener event for "View Highscore" button to display highscore
scoresButtonEl.addEventListener("click", function(){
    
    var points = 100;
    highScoreEl.innerHTML = "High Score: " + points;
    
});


        
    
    
    
    
    
    
    
    
    
