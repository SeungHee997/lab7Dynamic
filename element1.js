var state = {
    width:60
}

function ChangeHealth() {
    // state.width--;
    // state.width = state.width-20;
    state.width-= 20;
    document.querySelector("#pink").style.width = state.width + "%";
    console.log(state);
}

console.log(state);