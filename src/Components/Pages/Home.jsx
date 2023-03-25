import { useState } from "react";
import EndGame from "./EndGame";
import Square from "./Square";

const Bingo: React.FC = () => {

  const INITIAL = "";
  const [grid, setGrid] = useState(Array(25).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [winCount, setwinCount] = useState({ X: 0 });
  const winCombination = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [4, 8, 12, 16, 20],
    [0, 6, 12, 18, 24],
  ];

  const randomArray = [];
  for (let i = 1; i < 75; i++) {
    randomArray[i] = i;
  }

  const shuffledArray = randomArray.sort(
    (a, b) => 0.5 - Math.random()
  );

  const isGameOver = () => {
    if (!gameFinished) {
      grid[winCombination[2][2]] = "Center";
      for (let i = 0; i < 12; i++) {
        if (
          grid[winCombination[i][0]] !== INITIAL &&
          grid[winCombination[i][1]] !== INITIAL &&
          grid[winCombination[i][2]] !== INITIAL &&
          grid[winCombination[i][3]] !== INITIAL &&
          grid[winCombination[i][4]] !== INITIAL
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, X: winCount.X + 1 });
          console.log("X WON");
          return;
        }
      }
    }
  };

  const restartGame = () => {
    setGrid(Array(25).fill(INITIAL));
    setGameFinished(false);
  };

  const clearHistory = () => {
    setwinCount({ X: 0 });
    restartGame();
  };

  isGameOver();

  const handleClick = (id) => {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          return "" + shuffledArray[id];
        } else {
          return item;
        }
      })
    );
    setPlayer(player);
  };

  return (
    <div>
      <span className="win-history">{winCount.X}</span>
      {gameFinished && (
        <EndGame
          winCount={winCount}
          restartGame={restartGame}
          player={player}
          clearHistory={clearHistory}
        />
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
    </div>
  );
};

export default Bingo;
