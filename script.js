/** 
 first try-- > fail
 * function changeColor(item){
    item.style.backgroundColor = 'green'
};

let x = document.getElementById("C");
x.addEventListener('click', changeColor);
**/


console.log('js esta conectado com html?')


function changeColorToGreen(element){
    element.target.style.backgroundColor = 'green'
}

let x = document.getElementById('C')
x.addEventListener('mouseup', changeColorToGreen)
x.removeEventListener('mousedown', changeColorToGreen)

console.log(x)
console.log(typeof x)


