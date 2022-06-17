import "./Calculator.css";
import { useState } from "react";

import { NumberInput, PercentageInput } from "./FormComponents";
import { Tip } from "./AmountComponent";

const Form = ({ bill, updateBill, percentage, updatePercentage, people, updatePeople }) => {
  return (
    <div className="Bill">
      <NumberInput
        number={bill}
        name={"Bill"}
        icon={"/images/icon-dollar.svg"}
        setNumber={updateBill}
      />
      <PercentageInput
        percentage={percentage}
        setPercentage={updatePercentage}
      />
      <NumberInput
        number={people}
        name={"Number of People"}
        icon={"/images/icon-person.svg"}
        setNumber={updatePeople}
        useValidation={true}
      />
    </div>
  );
};

const Amount = ({ Bill, People, Percentage, resetButton }) => {
  var totalPerPerson = 0;
  var tipPerPerson = 0;
  if (Bill > 0 && People > 0 && Percentage > -1) {
    tipPerPerson = (Bill * Percentage/100)/People;
    totalPerPerson = (Bill * (1+Percentage/100))/People;
  }
  return (
    <div className="Amount borderBox">
      <Tip name="Tip Amount" value={tipPerPerson}/>
      <Tip name="Total" value={totalPerPerson}/>
      <button onClick={resetButton}>RESET</button>
    </div>
  );
};

export const Calculator = () => {
  const [Bill, setBill] = useState(0);
  const [People, setPeople] = useState(0);
  const [Percentage, setPercentage] = useState(0);

  const updateBill = (num) => {
    setBill(num);
  };

  const updatePercentage = (num) => {
    setPercentage(parseFloat(num));
  };

  const resetButton = () => {
    setBill(0);
    setPeople(0);
    setPercentage(0);
  }

  return (
    <div className="Calculator borderBox">
      <Form
        bill = {Bill}
        updateBill={updateBill}
        percentage={Percentage}
        updatePercentage={updatePercentage}
        people = {People}
        updatePeople={setPeople}
      />
      <Amount Bill={Bill} People={People} Percentage={Percentage} resetButton={resetButton} />
    </div>
  );
};
