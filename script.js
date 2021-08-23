function changeColorToGreen(element){
    element.target.style.backgroundColor = 'green'
}
function changeColorToWhite(element){
    element.target.style.backgroundColor = 'white'
}


let sound = new Audio();
sound.src = "notes/A.mp3"

function playSound(){
    sound.play()
}

let x = document.getElementById('C') // testando na primeira tecla
x.addEventListener('mousedown', changeColorToGreen)
x.addEventListener('mouseup', changeColorToWhite)
x.addEventListener('mousedown', playSound)









