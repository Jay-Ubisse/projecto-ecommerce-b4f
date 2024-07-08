import { Header } from "../components/header";
import { SocialMediaCard } from "../components/contact/socialmediacard";
import { EmailCard } from "../components/emailCard";

export const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <SocialMediaCard />
        <EmailCard />
      </main>
    </>
  );
};
