
window.addEventListener('keypress', function (e) {
    if (e.key == 'w') {
        var audio = new Audio('./Css/sounds/tom-1.mp3');
        audio.play();
    }
    if (e.key == 'a') {
        var audio = new Audio('./Css/sounds/tom-2.mp3');
        audio.play();
    }
    if (e.key == 's') {
        var audio = new Audio('./Css/sounds/tom-3.mp3');
        audio.play();
    }
    if (e.key == 'd') {
        var audio = new Audio('./Css/sounds/tom-4.mp3');
        audio.play();
    }
    if (e.key == 'j') {
        var audio = new Audio('./Css/sounds/snare.mp3');
        audio.play();
    }
    if (e.key == 'k') {
        var audio = new Audio('./Css/sounds/crash.mp3');
        audio.play();
    }
    if (e.key == 'l') {
        var audio = new Audio('./Css/sounds/kick-bass.mp3');
        audio.play();
    }
})

window.addEventListener('click', function (e) {
    if (e.target.id == 'tom-1') {
        var audio = new Audio('./Css/sounds/tom-1.mp3');
        audio.play();
    }
    if (e.target.id == 'tom-2') {
        var audio = new Audio('./Css/sounds/tom-2.mp3');
        audio.play();
    }
    if (e.target.id == 'tom-3') {
        var audio = new Audio('./Css/sounds/tom-3.mp3');
        audio.play();
    }
    if (e.target.id == 'tom-4') {
        var audio = new Audio('./Css/sounds/tom-4.mp3');
        audio.play();
    }
    if (e.target.id == 'snare') {
        var audio = new Audio('./Css/sounds/snare.mp3');
        audio.play();
    }
    if (e.target.id == 'crash') {
        var audio = new Audio('./Css/sounds/crash.mp3');
        audio.play();
    }
    if (e.target.id == 'kick-bass') {
        var audio = new Audio('./Css/sounds/kick-bass.mp3');
        audio.play();
    }
})

// const myFunction = (name) => {
//     var audio = new Audio('./Css/sounds/' + name + '.mp3');
//     audio.play();
// }