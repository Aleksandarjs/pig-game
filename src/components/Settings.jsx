import { useState } from "react";

import Form from "./Form";

const Settings = ({ LuSettings, isSettingsOpen, onSettingsOpen }) => {
  const [isRotated, setIsRotated] = useState(false);

  function handleUserSettings() {
    setIsRotated(true);

    setTimeout(() => {
      setIsRotated(false);
      onSettingsOpen((prev) => !prev);
    }, 1000);
  }
  return (
    <>
      {isSettingsOpen && (
        <div className="absolute inset-0 h-full w-full bg-black">
          <div className="container grid grid-cols-2 h-full">
            <Form />
            <div>
              game rules, explaining risk adjust and other, and voice command
              tutorial
            </div>
          </div>
        </div>
      )}
      <div className="absolute top-[5%] right-[5%]">
        <LuSettings
          className={`${isRotated ? "animate-spin" : ""} 
          ${isSettingsOpen ? "text-white" : "text-black"}
           text-4xl cursor-pointer`}
          onClick={handleUserSettings}
        />
      </div>
    </>
  );
};

export default Settings;
