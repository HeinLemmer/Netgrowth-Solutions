import Section from "./Section";
import Button from "./Button";
import { lightBulb } from "../assets";
import { BackgroundCircles, Gradient, BottomLine } from "./design/Hero";
//import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[10rem] -mt-[5rem]"
      crosses
      crossesOffset="lg: translate-y-[5rem]"
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Grow your Digital Presence&nbsp; with&nbsp;
            <span className="inline-block relative">NetGrowth Solutions</span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unlock your full potential.
          </p>
          <Button href="#benefits" className="text-color-3" white>
            Learn More
          </Button>
        </div>
        <div className="relative -mt-10 max-w-[23rem] mx-auto md:max-w-5xl xl:mb-20">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className=" rounded-b[0.9rem]">
                <img
                  src={lightBulb}
                  className="rounded-[1rem] w-full"
                  width={1000}
                  height={400}
                  alt="Hero_Image"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute 
                    -left-[5.5rem] bottom-[11rem] w-[15rem] xl:flex"
                    title="Boost your business"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
