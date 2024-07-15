import { WhatsappLogo } from "@phosphor-icons/react";
export const Card = () => {
  return (
    <div className="bg-white bg-opacity-87 text-sky-blue-200 p-2 text-center space-y-3 h-15 w-64 shadow-2xl rounded-3xl ">
      <div className="icon h-12 w-12 r text-3xl pt-1 m-auto">
        <div className="p-2 ">
        <WhatsappLogo size={32} />
        </div>
      </div>
<div>
      <h2 className="font-bold">CALL US</h2>
      <div>
        <div>
          +258876547766
          <br />
        +25884567897
        </div>
      </div>
    </div>
    </div>
  );
};