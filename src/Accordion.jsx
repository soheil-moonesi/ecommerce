import { useState } from "react";

export function Accordion({ AccordionText }) {
  return (
    <div className="w-full justify-center flex-wrap flex m-3">
      <div className="justify-center flex-wrap flex flex-col w-1/2">
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
    <div className="flex flex-wrap flex-col w-full justify-center border-2 border-black w-full cursor-pointer">
      <div
        onClick={() => setToggle((isOpen) => !isOpen)}
        className="flex text-center justify-between m-5"
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
