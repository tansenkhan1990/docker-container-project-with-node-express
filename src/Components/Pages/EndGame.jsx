
const EndGame: React.FC = ({ clearHistory, winCount, restartGame, player }) =>{
  return (
    <div className="end-game-screen">
      <span className="win-text">Congrats You Win</span>
      
      <span className="win-history">
        Your WINS Count is: {winCount.X}
      </span>

      <button className="btn" onClick={restartGame}>
        RESTART GAME
      </button>
      <button className="btn" onClick={clearHistory}>
        CLEAR HISTORY
      </button>
    </div>
  );
}

export default EndGame;