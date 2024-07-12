import { Header } from "../components/header";
import { SocialMediaCard } from "../components/contact/socialmediacard";
import { EmailCard } from "../components/contact/emailCard";
import { Card } from "../components/contact/card-number";
import { Footer } from "../components/footer";
import { Form } from "../components/contact/form";


export const Contact = () => {
  return (
    <>
    <Header />
<main className="bg-gradient-to-r from-white to-sky-blue-200">
  <div className="flex flex-col items-center pt-5">
    <div className="absolute flex flex-col items-center justify-center w-full max-w-flex">
      <h1 className="font-bold text-white text-5xl">Contacte-nos</h1>
    </div>

    <div className="mt-20 mb-10">
      <Form />
    </div>

    <div className="flex items-center justify-center space-x-4 mx-96 mb-10">
      <div><SocialMediaCard /></div>
      <div><EmailCard /></div>
      <div><Card /></div>
      <div><Card /></div>
    </div>
  </div>
</main>
      {/* <Header />
      <main className="bg-gradient-to-r from-sky-blue-100 to-sky-blue-200">
        <div className="flex">
          <div className="pt-11">
            <div className="flex absolute justify-center max-w-flex  w-full flex-col items-center">
              <h1 className="font-bold text-white text-2xl">Contactos</h1>
            
            </div>

            <div className="grid items-center justify-center min-h-screen mx-96 space-x-4 ">
              <div><Form /></div>
              <div><SocialMediaCard /></div>
              <div><EmailCard /></div>
              <div><Card /></div>
              <div><Card /></div>
            </div>
          </div>
        </div>
      </main> */}

      <Footer />
    </>
  );
};
