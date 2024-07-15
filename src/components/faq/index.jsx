import { useState } from "react";


export const FaqComponents = ({question, answer}) => {  
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="py-1 ">
      <button
          className="flex justify-between w-full bg-sky-blue-200 text-white  py-2 px-4 rounded-md mb-2 hover:bg-black hover:text-orange focus:outline-none focus:ring-2 focus:ring-cream-100"
          onClick={() => setOpen(!open)}
        >
          <span> {question}</span>
          <span>{open ? "-" : "+"}</span>
        </button>   

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-full opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-full"}`}>
          <div className="bg-sky-blue-100 p-2 hover:bg-orange/50 ">{answer}</div>
        </div>
      </div>
    </>
  );
};