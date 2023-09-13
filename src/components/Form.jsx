import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username1: "",
    username2: "",
    winningTarget: "",
    riskFactor: "high",
    gameMode: "default",
    superpowers: "off",
    rollPerRound: "",
    timedRounds: "off",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  }

  return (
    // <form className="bg-[#cc3761] p-10 ">
    //   <h2 className="mb-10 text-4xl font-bold text-white placeholder-red-500">
    //     SETTINGS
    //   </h2>
    //   <label htmlFor="">Username 👤</label>
    //   <input
    //     className="input"
    //     name="username1"
    //     type="text"
    //     placeholder="PLAYER 1"
    //     onChange={handleChange}
    //   />

    //   <label htmlFor="">Username 👤</label>
    //   <input
    //     className="input"
    //     name="username2"
    //     type="text"
    //     placeholder="PLAYER 2"
    //     onChange={handleChange}
    //   />

    //   <label htmlFor="">Winning target 🏆</label>
    //   <input
    //     className="input"
    //     name="winningTarget"
    //     type="text"
    //     placeholder="WINNING TARGET"
    //     onChange={handleChange}
    //   />

    //   <label htmlFor="">Adjust the risk factor ⚠️</label>
    //   <select
    //     className="select"
    //     name="riskFactor"
    //     id=""
    //     onChange={handleChange}
    //   >
    //     <option value="low">Low </option>
    //     <option value="high" selected>
    //       High
    //     </option>
    //     <option value="challenger">Challenger</option>
    //   </select>

    //   <label htmlFor="">Game modes 🎲</label>
    //   <select className="select" name="gameMode" id="" onChange={handleChange}>
    //     <option value="default" selected>
    //       Default
    //     </option>
    //     <option value="casino">Casino</option>
    //   </select>

    //   <label htmlFor="">Superpowers ⚡</label>
    //   <select
    //     className="select"
    //     name="superpowers"
    //     id=""
    //     onChange={handleChange}
    //   >
    //     <option value="off" selected>
    //       Off
    //     </option>
    //     <option value="on">On</option>
    //   </select>

    //   <label htmlFor="">Roll per round limit ♾️</label>
    //   <input
    //     className="input"
    //     name="rollPerRound"
    //     type="text"
    //     placeholder="None"
    //     onChange={handleChange}
    //   />

    //   <label htmlFor="">Timed rounds ⏳</label>
    //   <select
    //     className="select"
    //     name="timedRounds"
    //     id=""
    //     onChange={handleChange}
    //   >
    //     <option value="off" selected>
    //       Off
    //     </option>
    //     <option value="on">On</option>
    //   </select>
    // </form>
    <div className="text-white font-4xl uppercase">
      SPEECH COMMANDS AND IN GAME SETTINGS ARE COMING SOON...
    </div>
  );
};

export default Form;
