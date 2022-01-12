var form =document.getElementById('form')
var isinput = document.getElementById('input')
var isbutton =document.getElementById('button')
var isresalt=document.getElementById('resalt')

form.addEventListener('submit', event=>{
event.preventDefault()
console.log()
let a =0
if(isinput.value<a){
    isresalt.textContent= 'fizz'

}if(isinput.value>a){
    isresalt.textContent= 'buzz'

}else{
    isresalt.textContent= 'fizzbuzz'

}
})


