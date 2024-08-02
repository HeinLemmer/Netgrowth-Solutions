import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping you grow at{" "}
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-between flex-1 h-[8.5rem]"
            key={index}
          >
            <video
              src={logo}
              width={250}
              height={30}
              alt={logo}
              type="video/mp4"
              autoPlay
              loop
              muted
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
