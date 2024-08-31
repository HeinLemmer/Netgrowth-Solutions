import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="benefits">
      <div className="container relative z-2 lg:-mt-[7rem]">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Your partner in Digital Growth"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat 
            bg-[lenght:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url({item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div
                className="relative z-2 flex flex-col 
              min-h-[22rem] p-[2.4rem] pointer pointer-events-none"
              >
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto text-black">
                  <img
                    src={item.iconUrl}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absoute inset-0.5 bg-black"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
