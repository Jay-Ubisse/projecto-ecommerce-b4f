import { WhatsappLogo } from "@phosphor-icons/react";
export const Card = () => {
  return (
    <div className="bg-black bg-opacity-87 text-white p-2 text-center space-y-3 h-15 max-w-sm mx-auto shadow-2xl rounded-3xl ">
      <div className="icon h-12 w-12 ring-4 text-3xl ring-white pt-1 m-auto">
        <div className="p-1 ">
        <WhatsappLogo size={32} />
        </div>
      </div>

      <h2 className="font-bold">CALL US</h2>
      <div>
        <div>
          +258876547766
          <br />
        +25884567897
        </div>
      </div>
    </div>
  );
};