import "./styles/globals.css";
// import Transition from '@components/transition'
// import AnimatePresencesLayout from '@components/Animate-presence'
import Nav from "@components/nav";
import { sora } from "./utils/fonts";
import Header from "@components/header";
import { Analytics } from '@vercel/analytics/react';
import LanguageSwitcher from "./components/languajeswitcher";


export const metadata = {
  title: "Portfolio Web Developer",
  description: "Portfolio web developer Rivarola Matias, using Next.js and react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} page bg-site text-white bg-cover bg-no-repeat font-so
     relative`}
      >
        {/* <AnimatePresencesLayout> */}
        {/* <Transition/> */}
        <Nav />
        <Header />
        <LanguageSwitcher/>
        {children}
        {/* </AnimatePresencesLayout> */}
        <Analytics/>
      </body>
    </html>
  );
}
