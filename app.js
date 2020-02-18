var data = {
    qnum: 0,
    questions: [
        {
            title: "Is your life beautiful?",
            answer: "Yes",
            bgcolors: "yellow",
            img: "http://placekitten.com/100/100"
        },
        {
            title: "What comes after A?",
            answer: "Yes",
            bgcolors: "blue",
            img: "http://placekitten.com/200/200"
        },
        {
            title: "Is 5 bigger than 4?",
            answer: "Yes",
            bgcolors: "#FAD",
            img: "http://placekitten.com/300/300"
        }
    ]
}
var questions = [
    "Is your life beautiful?",
    "What comes after A?",
    "Is 5 bigger than 4?",
    "What is the color of a banana?"
];

var answers = [
    "Yes",
    "B",
    "Yes",
    "Yellow"
];

var bgcolors = [];

function Start() {
    // document.querySelector("#text h1").innerText = questions[qnum];
    document.querySelector("#text h1").innerText = questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#result").innerHTML = "<img src=" + data.questions[data.qnum].img + "' />"
}
function CheckAnswer() {
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    if (myInp === answers[qnum]) {
        document.querySelector("#result").innerHTML = "<h1>Correct!</h1>";

        qnum++;
        document.querySelector("#text h1").innerText = questions[qnum];

        // if (qnum === 1) {
        //     qnum = 2;
        //     document.querySelector("#text h1").innerText = "Is 5 bigger than 4?";
        //     answer = "Yes";
        // } else if (qnum === 2) {
        //     qnum = 3;
        //     document.querySelector("#text h1").innerText = "What is the color of a banana?";
        //     answer = "Yellow";
        // }

    } else {
        document.querySelector("#result").innerText = "<h1>WRONG!</h1>";
    }
}