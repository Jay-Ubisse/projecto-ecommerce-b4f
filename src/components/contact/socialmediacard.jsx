import { FacebookLogo } from "@phosphor-icons/react";
import { InstagramLogo } from "@phosphor-icons/react";
import { TiktokLogo } from "@phosphor-icons/react";


export const SocialMediaCard = () => {
  return (
    <div className="bg-sky-blue-200 bg-opacity-87 text-white p-2 text-center space-y-3 h-15 max-w-sm mx-auto shadow-2xl rounded-3xl ">
      <h2 className="font-bold">Contacte-nos</h2>
      <div>
        <div>
          <p>Contacte-nos através das<p></p> nossas redes sociais</p>
        </div>
      </div>
      <div className="icon h-30 w-30">
        <div className="p-1 flex items-center justify-center space-x-3">
          <FacebookLogo size={32} />
          <InstagramLogo size={32} />
          <TiktokLogo size={32} />
        </div>
          </div>
    </div>
  );
};