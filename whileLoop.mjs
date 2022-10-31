import promptSync from "prompt-sync";

const prompt = promptSync();

let input = true;



while (input) {
    let userInput = Number(prompt("On a scale of 1-10, how much do you like the name Alexander?"));
    if(userInput >= 0 && userInput <= 10){
        input = false;
    } else {
        input = true;
    }
}

console.log(input);