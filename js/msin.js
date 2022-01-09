var form =document.getElementById('form')
var isinput = document.getElementById('input')
var isbutton =document.getElementById('button')
var isresalt=document.getElementById('resalt')

form.addEventListener('submit', event=>{
event.preventDefault()
console.log()


if(isinput.value/3){
   isresalt.textContent='fizz'
} 
if(isinput.value/5){
    isresalt.textContent='buzz'
}if(isinput.value/15){
    isresalt.textContent='fizzbuzz'
}else{
    isresalt.textContent='bu yerga faqat raqam kiritiladi...'
}
})
// isresalt.textContent= kottakichik

// })
// function kottakichik 0){
//     if(number>0)return 'fizz'
//     if(number<0)return 'buzz'
//     return 'fizzbuzz'

// }