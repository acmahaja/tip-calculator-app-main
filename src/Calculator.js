import "./Calculator.css";
import { useState } from "react";

import { NumberInput, PercentageInput } from "./FormComponents";

const Form = ({ updateBill, percentage, updatePercentage,updatePeople }) => {
  return (
    <div className="Bill">
      <NumberInput
        name={"Bill"}
        icon={"/images/icon-dollar.svg"}
        setNumber={updateBill}
      />
      <PercentageInput
        percentage={percentage}
        setPercentage={updatePercentage}
      />
      <NumberInput
        name={"Number of People"}
        icon={"/images/icon-person.svg"}
        setNumber={updatePeople}
        useValidation = {true}
      />
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

  return (
    <div className="Calculator borderBox">
      <Form
        updateBill={updateBill}
        percentage={Percentage}
        updatePercentage={updatePercentage}
        updatePeople={setPeople}
      />
    </div>
  );
};
