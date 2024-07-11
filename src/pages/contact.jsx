import { Header } from "../components/header";
import { SocialMediaCard } from "../components/contact/socialmediacard";
import { EmailCard } from "../components/emailCard";
import { Card } from "../components/card-number";
import { Footer } from "../components/footer";


export const Contact = () => {
  return (
    <>
      <Header />

      <main>
        <div className="flex relative">
          <video
            className="w-full h-full"
            src="/videocontact.mp4"
            autoPlay
            loop
          
          />

          <section className=" flex absolute">
          
          <section className="pt-11">
          <div className="flex absolute justify-center max-w-flex  w-full flex-col items-center">
          <h1 className="font-bold text-white text-2xl">Contactos</h1>
          <p className="font-normal inline-f text-white">
            Estamos aqui para ajudar você a encontrar seu estilo perfeito. Entre
            em contato connosco para qualquer dúvida, sugestão ou assistência.
            Adoramos ouvir dos nossos clientes!
          </p>
          </div>
        </section>
           <section className="flex items-center justify-center min-h-screen mx-96 space-x-4 ">
            <SocialMediaCard />
            <EmailCard />
            <Card />
            </section>
          </section>
        </div>
        
      </main>
      <Footer />
    </>
  );
};
