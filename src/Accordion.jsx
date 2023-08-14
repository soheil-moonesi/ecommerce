import { useState } from "react";

export function Accordion({ AccordionText }) {
  return (
    <div className="flex flex-wrap justify-center w-full m-3">
      <div className="flex flex-col flex-wrap justify-center w-1/2">
        {AccordionText.map((AccordionText, i) => (
          <AccordionItems AccordionText={AccordionText} num={i} />
        ))}
      </div>
    </div>
  );
}
function AccordionItems({ AccordionText, num }) {
  const [isOpen, setToggle] = useState(false);

  return (
    <div className="flex flex-col flex-wrap justify-center w-full border-2 border-black cursor-pointer">
      <div
        onClick={() => setToggle((isOpen) => !isOpen)}
        className="flex justify-between m-5 text-center"
      >
        <span>{num + 1}</span>
        {AccordionText.title}
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`flex text-center justify-center ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        {AccordionText.note}
      </div>
    </div>
  );
}
