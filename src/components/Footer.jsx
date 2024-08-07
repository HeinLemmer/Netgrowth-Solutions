import { socials } from "../constants";
import Section from "./Section";
import { useEffect, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Obfuscate email
    const user = "NetgrowthITSolutions";
    const domain = "outlook.com";
    setEmail(`${user}@${domain}`);
  }, []);
  return (
    <Section id="footer" crosses className="!px-0 !py-10">
      <div
        className="container flex sm:justify-between justify-center 
    items-center gap-10 max-sm:flex-col"
      >
        <p className="caption text-n-3 lg:block">
          © {new Date().getFullYear()}. All rights reserved
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center 
              justify-center w-10 h-10 
              bg-n-7 rounded-full transition-colors 
              hover:bg-n-3"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
      <div
        className="container flex sm:justify-between justify-center 
    items-center gap-10 max-sm:flex-col"
      >
        <p className="caption text-n-3 lg:block mt-5 lg:mt-1 md:mt-1">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </Section>
  );
};

export default Footer;
