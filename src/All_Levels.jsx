import { useState } from "react";
import { level_message } from "./App";

export function All_Levels() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep((currentState) => currentState - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((currentState) => currentState + 1);
    }
  }

  return (
    <div className="m-5">
      <div className="flex justify-around ">
        <div
          className={`w-10 text-center ${step >= 1 ? "bg-orange-500" : null}`}
        >
          1
        </div>
        <div
          className={`w-10 text-center ${step >= 2 ? "bg-orange-500" : null}`}
        >
          2
        </div>
        <div
          className={`w-10 text-center ${step >= 3 ? "bg-orange-500" : null}`}
        >
          3
        </div>
      </div>

      <div>
        مرحله {step} : {level_message[step - 1]}
      </div>

      <div className="flex justify-around gap-4">
        <button onClick={handlePrevious}>مرحله قبلی</button>
        <button onClick={handleNext}>مرحله بعدی</button>
      </div>
    </div>
  );
}
