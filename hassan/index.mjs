import PromptSync from "prompt-sync";
    const prompt = PromptSync();

let userInput = prompt("Enter a Name");
switch (userInput) {
    case "Hassan":
        console.log(userInput + " is a Friend");
        break;
    case "Ali":
        console.log(userInput + " is a Friend");
        break;
    case "Umair":
        console.log(userInput + " is a Friend");
        break;
    default :
    console.log("Don't know the person");
}