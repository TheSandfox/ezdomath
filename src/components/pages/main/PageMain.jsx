import Navigation from "../navigation/navigation";
import { Section1 } from "./sections/sec1/section1";
import { Section3 } from "./sections/sec3/section3";
import { Section4 } from "./sections/sec4/section4";
import { Footer } from "./sections/footer/footer";

export function PageMain({}) {
  return (
    <>
      <Navigation />
      <Section1 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}
