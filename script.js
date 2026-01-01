 const submitBtn = document.getElementById("submit");
  const startScreen = document.getElementById("start-screen");
  const gameScreen = document.getElementById("game-screen");
  const message = document.querySelector(".message");
  const cells = document.querySelectorAll(".cell");

  let currentPlayer = "x";
  let gameOver = false;

  const winPatterns = [
    ["1","2","3"], ["4","5","6"], ["7","8","9"],
    ["1","4","7"], ["2","5","8"], ["3","6","9"],
    ["1","5","9"], ["3","5","7"]
  ];

  submitBtn.addEventListener("click", () => {
    const p1 = document.getElementById("player1").value;
    const p2 = document.getElementById("player2").value;

    if (!p1 || !p2) {
      alert("Enter both player names");
      return;
    }

    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    message.innerText = "Player1, you're up";
  });

  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      if (cell.innerText !== "" || gameOver) return;

      cell.innerText = currentPlayer;

      if (checkWin()) {
        const winner =
          currentPlayer === "x" ? "Player1" : "Player2";
        message.innerText = `${winner} congratulations you won!`;
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === "x" ? "o" : "x";
      message.innerText =
        currentPlayer === "x"
          ? "Player1, you're up"
          : "Player2, you're up";
    });
  });

  function checkWin() {
    return winPatterns.some(pattern =>
      pattern.every(id =>
        document.getElementById(id).innerText === currentPlayer
      )
    );
  }