function changeColorToGreen(element){
    element.target.style.backgroundColor = 'green'
}
function changeColorToWhite(element){
    element.target.style.backgroundColor = 'white'
}
function changeColorToBlack(element){
    element.target.style.backgroundColor = 'black'
}


const listOfKeys = document.querySelectorAll('.key') //list of all key elements
console.log(listOfKeys)

function playNote(element){
    let sound = new Audio();
    sound.src = 'notes/'+element.target.getAttribute('id')+'.mp3'
    sound.play()

}

listOfKeys.forEach(key =>{
    key.addEventListener('mousedown', changeColorToGreen)
    if(key.classList.contains('white')){
        key.addEventListener('mouseup', changeColorToWhite)
    } else {
        key.addEventListener('mouseup', changeColorToBlack)
    }
    console.log(key.getAttribute('id')+'.mp3')
    key.addEventListener('mousedown', playNote)
})

