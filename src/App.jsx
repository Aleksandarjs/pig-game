import { useEffect, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { LiaDiceSolid } from "react-icons/lia";
import { GiStopSign } from "react-icons/gi";
import { LuSettings } from "react-icons/lu";

import Player from "./components/Player";
import Button from "./components/Button";
import Settings from "./components/Settings";
import { dice } from "./assets/images/";

export default function App() {
  const [diceNum, setDiceNum] = useState(null);
  const [activePlayer, setActivePlayer] = useState(1);
  const [sum, setSum] = useState(0);
  const [endGameValue, setEndGameValue] = useState(10);
  const [isFinished, setIsFinished] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [playerScores, setPlayerScores] = useState({
    player1: 0,
    player2: 0,
  });

  const handleResetGame = () => {
    setPlayerScores({ ...playerScores, player1: 0, player2: 0 });
    setIsFinished(false);
  };

  const handleDiceRoll = () => {
    if (isFinished) return;
    let randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceNum(randomNum);
    diceNum === 1 && handleSwitchPlayer();
  };

  const handleSwitchPlayer = () => {
    setActivePlayer(activePlayer === 1 ? 2 : 1);
  };

  const handleHold = function () {
    const value = sum;
    if (value === 0) return;
    if (isFinished) return;

    setPlayerScores((prevPlayers) => {
      if (activePlayer === 1) {
        return {
          ...prevPlayers,
          player1: prevPlayers.player1 + value,
        };
      } else {
        return {
          ...prevPlayers,
          player2: prevPlayers.player2 + value,
        };
      }
    });

    setSum(0);
    handleSwitchPlayer();
  };

  useEffect(() => {
    function handlePlayerSum() {
      diceNum > 1 ? setSum((sum) => sum + diceNum) : setSum(0);
    }
    handlePlayerSum();
  }, [diceNum]);
  // game end logic
  useEffect(() => {
    {
      Object.values(playerScores).map((value) => {
        if (value >= endGameValue) {
          setIsFinished(true);
        }
      });
    }
  }, [playerScores, endGameValue, isFinished]);

  return (
    <section className="flex items-center justify-center min-h-screen container ">
      <Player
        playerName="Player 1"
        activePlayer={activePlayer === 1}
        sum={sum}
        playerScore={playerScores.player1}
        endGameValue={endGameValue}
      />
      <Player
        playerName="Player 2"
        activePlayer={activePlayer === 2}
        sum={sum}
        playerScore={playerScores.player2}
        endGameValue={endGameValue}
      />

      <Button extraClassName="top-[30%]" onClick={handleResetGame}>
        <BsArrowRepeat className="icon" />
        New Game
      </Button>
      {!isFinished && (
        <>
          <Button extraClassName="bottom-[37.5%]" onClick={handleDiceRoll}>
            <LiaDiceSolid className="icon" />
            Roll Dice
          </Button>
          <Button extraClassName="bottom-[30%]" onClick={handleHold}>
            <GiStopSign className="icon" fill="red" />
            Hold
          </Button>
        </>
      )}

      <Settings
        LuSettings={LuSettings}
        isSettingsOpen={isSettingsOpen}
        onSettingsOpen={setIsSettingsOpen}
      />

      {!isFinished && !isSettingsOpen && diceNum && (
        <div className="absolute top-[40%]">
          <img
            src={`${dice.slice(0, -5)}${diceNum}.png`}
            alt="dice"
            width={100}
            height={100}
          />
        </div>
      )}
    </section>
  );
}
