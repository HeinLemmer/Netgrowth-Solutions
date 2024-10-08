import { useLocation } from "react-router-dom";
import { netgrowth } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const [email, setEmail] = useState("");

  useEffect(() => {
    // Obfuscate email
    const user = "NetgrowthITSolutions";
    const domain = "outlook.com";
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-black/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-black" : "bg-black/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] rounded-xl xl:mr-8" href="#Home">
          <img src={netgrowth} width={180} height={30} alt="NetGrowth" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 bg-black lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1/50 transition-colors hover:text-n-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <Button
          className="hidden lg:flex px-6"
          href={`mailto:${email}`}
          target="_blank"
        >
          Contact Us
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg OpenNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
