const randomButton=document.getElementsByTagName('button')[0]
const words=['Thank you Jesus','God is Good','Holy Ground','Grace is real']
const display =document.getElementsByTagName('p')[0]

randomButton.addEventListener('click',pickRandom)

function pickRandom(){
    const randomNumber= Math.floor(Math.random()*words.length)
    const pickedWord=words[randomNumber]
    display.innerText=pickedWord
}