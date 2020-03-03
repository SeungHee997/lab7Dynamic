var state = {
    name: ""
}
function showName() {
    state.name = document.querySelector("#nameCollector").value;
    console.log(state);
    document.getElementById("answerBox").innerText = "Hi," + state.name;
}