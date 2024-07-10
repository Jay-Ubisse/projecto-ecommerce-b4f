import { Header } from "../components/header";
import { SocialMediaCard } from "../components/contact/socialmediacard";
import { EmailCard } from "../components/emailCard";

export const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center max-w-flex justify-center w-full max-w-96 flex-col m-auto px-4 py-4g flex-col m-auto items-center">
          <h2 className="">Contactos</h2>
          <p className="">
            Venha aproveitar grandes novidades na nossa loja através do nossos
            serviços abaixo.
          </p>
        </div>

        <SocialMediaCard />
        <EmailCard />
      </main>
    </>
  );
};
