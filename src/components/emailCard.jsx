import { EnvelopeSimple } from "@phosphor-icons/react";
export const EmailCard = () => {
  return (
    <div className=" bg-sky-blue-200 bg-opacity-87 text-white p-2 text-center space-y-3 h-15 max-w-sm mx-auto shadow-2xl rounded-3xl m-auto">
      <div className="icon ">
        <div className="p-2 h-12 w-12  pt-1  m-auto">
          <EnvelopeSimple size={32} />
        </div>
      </div>
<div className="pb-3">
      <h2 className="font-bold">E-MAIL</h2>
      <div>
        <div>
          <a href="#">Kuxonga@shop.com</a>
          <br />
          <a href="#">suporteKuxonga@shop.com</a>
        </div>
      </div>
    </div>
    </div>
  );
};
