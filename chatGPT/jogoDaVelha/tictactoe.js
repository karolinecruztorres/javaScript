const squares = document.querySelectorAll(".square");
let currentPlayer = "X";

squares.forEach(square => {
  square.addEventListener("click", function() {
    if (!this.textContent) {
      this.textContent = currentPlayer;
      checkForWinner();
      switchPlayer();
    }
  });
});

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWinner() {
  const winningCombinations = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    ) {
      alert(`Player ${currentPlayer} won!`);
      resetBoard();
      return;
    }
  }

  if (Array.from(squares).every(square => square.textContent)) {
    alert("It's a draw!");
    resetBoard();
  }
}

function resetBoard() {
  squares.forEach(square => {
    square.textContent = "";
  });
}
