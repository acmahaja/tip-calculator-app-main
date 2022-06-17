import "./FormComponents.css";

import { useState } from "react";

const PercentageButton = ({ value, updatePercentage, isSelected }) => {
  const setPercentage = (event) => {
    updatePercentage(value);
  };
  return (
    <button
      type=""
      className={`PercentageButton ${isSelected ? `selected` : null}`}
      onClick={setPercentage}
    >
      {value}%
    </button>
  );
};

const PercentageNumber = ({ updatePercentage }) => {
  const setPercentage = (event) => {
    updatePercentage(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Custom"
      className="borderBox"
      onChange={setPercentage}
    />
  );
};

export const PercentageInput = ({ percentage, setPercentage }) => {
  const [useCustom, setCustom] = useState(false);
  const toggleCustom = () => {
    setCustom(!useCustom);
  };
  return (
    <>
      <label>Select Tip %</label>
      <div className="buttons">
        <PercentageButton
          value={5}
          updatePercentage={setPercentage}
          isSelected={5 === percentage && !useCustom}
        />
        <PercentageButton
          value={10}
          updatePercentage={setPercentage}
          isSelected={10 === percentage && !useCustom}
        />
        <PercentageButton
          value={15}
          updatePercentage={setPercentage}
          isSelected={15 === percentage && !useCustom}
        />
        <PercentageButton
          value={25}
          updatePercentage={setPercentage}
          isSelected={25 === percentage && !useCustom}
        />
        <PercentageButton
          value={50}
          updatePercentage={setPercentage}
          isSelected={50 === percentage && !useCustom}
        />
        <PercentageNumber
          updatePercentage={setPercentage}
          toggleCustom={toggleCustom}
        />
      </div>
    </>
  );
};

export const NumberInput = ({ name, icon, setNumber }) => {
  const [numberStyle, setNumberStyle] = useState("borderBox zeroNum");

  const updateNumber = (event) => {
    if (event.target.value !== "") {
      setNumberStyle(`borderBox notZeroNum`);
    } else {
      setNumberStyle(`borderBox zeroNum`);
    }

    if (event.target.value === "") {
      event.target.value = 0;
    }

    event.target.value = parseFloat(event.target.value);
    setNumber(event.target.value);
  };
  return (
    <>
      <label>{name}</label>
      <div className="inputBox borderBox">
        <img src={icon} srcSet={icon} alt={"asd"} />
        <input
          style={{ backgroundImage: `./images/icon-dollar.svg` }}
          className={numberStyle}
          type="number"
          min={0}
          onChange={updateNumber}
          placeholder={0}
        />
      </div>
    </>
  );
};
