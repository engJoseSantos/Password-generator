const pwEL = document.getElementById("password");
const lenEL = document.getElementById("len");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const symbolEL = document.getElementById("symbol");
const numberEL = document.getElementById("number");
const generateEl = document.getElementById("generate")

const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqsrtuvwxyz";
const numbers = "0123456789";
const symbol = "~!#$%&/()_-+*";

const getUppercase = () =>{
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

const getLowercase = () =>{
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

const getNumber = () =>{
    return numbers[Math.floor(Math.random() * numbers.length)];
    //To-fix
}

const getSymbol = () =>{
    return symbol[Math.floor(Math.random() * symbol.length)];
}

const generatePassword = ()=>{
    const len = lenEL.value;
    let password ="";
    for(let i = 0; i < len; i++){
        option = Math.floor(Math.random() * 4);
        if (upperEL.checked && option === 0){
            password += getUppercase();
        }else if(numberEL.checked && option === 1){
            password += getNumber();
        }else if(symbolEL.checked && option === 2){
            password += getSymbol();
        }else{
            password += getLowercase();
        }

       
    }
    pwEL.innerText = password;
}

generateEl.addEventListener("click", generatePassword);