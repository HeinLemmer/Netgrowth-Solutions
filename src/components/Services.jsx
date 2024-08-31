import { check, service1, service2, service3 } from "../assets";
import { netgrowthServices, netgrowthServices2 } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Services = () => {
  return (
    <Section id="services" crosses>
      <div className="container">
        <Heading
          title="Solutions that promote growth."
          text="NetGrowth provides custom solutions to match the clients needs."
          className="ml-2 mr-2"
        />
        <div className="relative">
          <div
            className="relative z-1 flex items-center h-[39rem] 
            mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden 
            lg:p-20 xl:h-[46rem]"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-screen h-full object-cover md:object-right filter opacity-70"
                width={800}
                height={730}
                alt="tech"
                src={service2}
              />
            </div>
            <div className="relative z-1 max-w[17rem]">
              <h4 className="h4 mb-4">Software Development</h4>
              <p className="body-2 mb-[3rem]">
                At NetGrowth we are dedicated to crafting custom solutions that
                drive efficiency, enhance user experience, and meet your unique
                business needs. From concept to deployment, we leverage the
                latest technologies and agile methodologies to deliver robust,
                scalable, and high-performing software that empowers your
                business to thrive in the digital age.
              </p>
              <ul className="body-2">
                {netgrowthServices.map((item, index) => (
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                    key={index}
                  >
                    <img src={check} width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div
              className="relative min-h-[39rem] border 
            border-n-6 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={service1}
                  className="h-full w-full object-cover filter brightness-75 opacity-70"
                  width={650}
                  height={600}
                  alt="service 1"
                />
              </div>
              <div className="absolute inset-0 flex-col px-8 py-20 justify-center bg-gradient-to-b from-black/0 to-black/90 lg:p-15">
                <h4 className="h4 mb-4">Digital Marketing</h4>
                <p className="body-2 mb-[3rem]">
                  At NetGrowth Solutions we utilizes innovative strategies and
                  cutting-edge technology to create personalized marketing
                  solutions.
                </p>
                <ul className="body-2">
                  {netgrowthServices2.map((item, index) => (
                    <li
                      className="flex items-start py-4 border-t border-n-6"
                      key={index}
                    >
                      <img src={check} width={24} height={24} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-0.5 bg-conic-gradient rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="p-0 border border-n-6 bg-black rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <img
                  src={service3}
                  className="h-full w-full object-cover filter brightness-90 opacity-70 rounded-3xl"
                  width={630}
                  height={600}
                  alt="service 3"
                />

                <div className="py-12 px-4 xl:px-10">
                  <h4 className="h4 mb-4">Social Media Management</h4>
                  <p>
                    NetGrowth Solutions specializes in helping businesses
                    amplify their online presence through expert social media
                    management. Our tailored approach begins with understanding
                    your brand and target audience, allowing us to craft a
                    personalized strategy that aligns with your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
