

const divz = document.querySelectorAll(".drum-pad")
divz.forEach(div => div.addEventListener("click", playaudio))
divz.forEach(div => div.addEventListener("transitionend", removeTr))
document.addEventListener('keydown', playaudio)



function playaudio(e) {
    if (event.code == 'KeyQ' || this.id == 1) {
        const audio = document.getElementById("Q");
        const pos = document.getElementById("1")
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#display").innerHTML = "close"
        pos.classList.add("playing")
    }
    else if (event.code == 'KeyW' || this.id == 2) {
        var audio = document.getElementById("W");
        const pos = document.getElementById("2")
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#display").innerHTML = "login"
        pos.classList.add("playing")
    }
    else if (event.code == 'KeyE' || this.id == 3) {
        var audio = document.getElementById("E");
        const pos = document.getElementById("3")
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#display").innerHTML = "logout"
        pos.classList.add("playing")
    }
    else if (event.code == 'KeyA' || this.id == 4) {
        var audio = document.getElementById("A");
        const pos = document.getElementById("4")
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#display").innerHTML = "map"
        pos.classList.add("playing")
    }
    else if (event.code == 'KeyS' || this.id == 5) {
        var audio = document.getElementById("S");
        const pos = document.getElementById("5")
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#display").innerHTML = "minimize"
        pos.classList.add("playing")
    }
    else if (event.code == 'KeyD' || this.id == 6) {
        var audio = document.getElementById("D");
        const pos = document.getElementById("6")
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#display").innerHTML = "notification"
        pos.classList.add("playing")
    }
    else if (event.code == 'KeyZ' || this.id == 7) {
        var audio = document.getElementById("Z");
        const pos = document.getElementById("7")
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#display").innerHTML = "plug"
        pos.classList.add("playing")
    }
    else if (event.code == 'KeyX' || this.id == 8) {
        var audio = document.getElementById("X");
        const pos = document.getElementById("8")
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#display").innerHTML = "switch"
        pos.classList.add("playing")
    }
    else if (event.code == 'KeyC' || this.id == 9) {
        var audio = document.getElementById("C");
        const pos = document.getElementById("9")
        audio.currentTime = 0;
        audio.play();
        document.querySelector("#display").innerHTML = "duplo"
        pos.classList.add("playing")
    }
}


function removeTr(event) {
    this.classList.remove("playing")
    document.querySelector("#display").innerHTML = "Music is life"

}

