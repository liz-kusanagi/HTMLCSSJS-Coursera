var answer;            
var inputGuessText;   
var inputGuess;      
var won = false;   
var guesses = 0;

function do_game() {
    alert("Test post please ignore")
    var random_number = Math.random() * 100;
    var random_number_integer = Math.floor(random_number);
    var colors = [azure, blue, brown, green, magenta, mistyrose, pink, purple, red, teal, yellow]
    answer = colors[random_number_integer];

    while (!finished) {
        guess_input_text = prompt("I am thinking of a color in this list:"+
                                  
        guess_input = parseInt(inputGuessText);
        guesses += 1;   
        finished = check_guess();
    }
}

function check_guess() {
    }
    alert("You got it! The color was " + answer + 
          ".\n\nIt took you " + guesses + 
          " guesses to get the color!");
    return true;   
}