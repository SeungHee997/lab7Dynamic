
// var qnum = 0;
// var question = [
//     " what comes after A ?",
//     "Is 5 bigger than 4 ?",
//     "what is the color of banana ?"
// ];



// var answer = [
//     "B",
//     "yes",
//     "yellow",

// ];



var data= {
    qnum:0,
    question:[
        title:"how is life ?",
        answer: "good",
        

    ]
}

function Start(){
    document.querySelector("#question-ask h1").innerText = question[qnum];
}


function CheckAnswer() {
    var myInp = document.querySelector("#question-input").value;
    console.log(myInp);
    if (myInp === answer[qnum]) {
     
        document.querySelector("#question-result").innerHTML = "<h1>Correct</h1>";


        qnum++;
        document.querySelector("#question-ask h1").innerText = question[qnum];


    } else {
        document.querySelector("#question-result").innerHTML = "<h1>Wrong</h1>";
    }
}

