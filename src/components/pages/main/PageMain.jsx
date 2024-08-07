import Navigation from "../navigation/navigation";
// import { Header } from "./sections/header/header";
import { Section1 } from "./sections/sec1/section1";
import { Section2 } from "./sections/sec2/section2";
import { Section3 } from "./sections/sec3/section3";
import { Section4 } from "./sections/sec4/section4";
import { Footer } from "./sections/footer/footer";
import { MainHeader } from "../header/MainHeader"

export function PageMain({}) {
  return (
    <>
      <Navigation />
      <MainHeader/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}
