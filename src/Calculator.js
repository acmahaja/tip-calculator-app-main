import "./Calculator.css";
import { useState } from "react";

const Form = ({Bill}) => {

    return (
        <form className="Bill">
            <>
                <label>
                    Bill
                </label>
                
            </>
        </form>
    )
};

export const Calculator = () => {
    const [Bill, setBill] = useState(1)
  
    return (
    <div className="Calculator">
      <Form Bill = {Bill}/>
    </div>
  );
};
