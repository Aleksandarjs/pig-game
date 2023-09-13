const Player = ({
  playerName,
  activePlayer,
  sum,
  playerScore,
  endGameValue,
}) => {
  return (
    <>
      <aside
        className={`bg-player py-20 text-center w-full ${
          activePlayer ? "active-player" : ""
        } ${playerScore >= endGameValue ? "winner" : ""}`}
      >
        <div className="">
          <h1 className="text-4xl uppercase font-medium">{playerName}</h1>
          <span className="text-5xl font-semibold text-[#cc3761] block mt-6">
            {activePlayer ? sum : 0}
          </span>
        </div>
        <div className="mt-28">
          <p className="bg-[#c63860] p-6 px-10 rounded-2xl text-white uppercase inline-block">
            Current{" "}
            <span className="block mt-2 text-2xl">
              {activePlayer === 1 ? playerScore : playerScore}
            </span>
          </p>
        </div>
      </aside>
    </>
  );
};

export default Player;
