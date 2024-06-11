const rulesBtn = document.querySelector(".rules-btn");
const close = document.querySelector(".close-icon");
const modal = document.querySelector(".modal");

const CHOICES = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "rock",
    beats: "scissors",
  },
];

const choiceBtns = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".section_container");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");
const triangle = document.querySelector(".triangle");

const resultWinner = document.querySelector(".results__winner");
const resultText = document.querySelector(".results__text");

const playAgainBtn = document.querySelector('.play-again')

// game logic

choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}

function choose(choice) {
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

function displayResults(results) {
  resultDivs.forEach((resultsDiv, index) => {
    setTimeout(() => {
      resultsDiv.innerHTML = `
                <div class="choice ${results[index].name}">
                    <img src='./img/${results[index].name}.png' alt='${results[index].name}' />
                </div>
            `;
    }, index * 1000);
  });

  gameDiv.classList.toggle("hidden");
  triangle.classList.toggle("hidden");
}

function displayWinner(results) {
  setTimeout(() => {
    const userWins = isWinner(results);
    const aiWins = isWinner(results.reverse());

    if (userWins) {
      resultText.innerHTML = "you win";
      resultDivs[0].classList.toggle('winner')
    } else if (aiWins) {
      resultText.innerHTML = "you lose";
      resultDivs[0].classList.toggle('winner')
    } else {
      resultText.innerHTML = "draw";
    }

    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");

  }, 1000);
}

function isWinner(results) {
  return results[0].beats === results[1].name;
}

// play again

playAgainBtn.addEventListener('click', () => {
    gameDiv.classList.toggle('hidden')
    resultsDiv.classList.toggle('hidden')
    triangle.classList.toggle("hidden");

    resultDivs.forEach(resultDiv => {
        resultDiv.innerHTML = ''
        resultDiv.classList.remove('winner')
    });

    resultText.innerHTML = ''
    resultWinner.classList.toggle('hidden')
    resultsDiv.classList.toggle('show-winner')
})



// show/hide modal

rulesBtn.addEventListener("click", () => {
  modal.classList.toggle("show-modal");
});

close.addEventListener("click", () => {
  modal.classList.toggle("show-modal");
});
