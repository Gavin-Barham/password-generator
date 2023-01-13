const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passLength = 14
let genrateBtn = document.getElementById("gen-pass-btn")
let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")

function randomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function generatePassword() {
    let temp = ""
    for (let i = 0; i < passLength; i++) {
        temp += characters[randomIndex()]
    }
    return temp
}

function renderPasswords() {
    let temp1 = generatePassword()
    let temp2 = generatePassword()
    passOneEl.textContent = temp1
    passTwoEl.textContent = temp2
}

