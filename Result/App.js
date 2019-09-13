



function getRandomNumber() {
    const choices = [1,2,3,4,5,6];
    const randomNumber = Math.floor(Math.random() * 6);
    return choices[randomNumber];
  }


function game()  {
    const randomChoice = getRandomNumber();
    switch (randomChoice) {
        case 1: src="OneResults.html"
                break;
        case 2: src="TwoResults.html"
                break;
        case 3:
                break;
        case 4:
                break;
        case 5:
                break;
        case 6:
                break;

    }
}    