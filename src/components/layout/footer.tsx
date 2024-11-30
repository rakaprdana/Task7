import { Link } from "react-router-dom";
import "boxicons";
import Button from "../elements/Button";

const Footer = () => {
  return (
    <>
      <footer className="bg-stone-700 flex justify-between px-8 mt-8 py-36">
        <div className="space-y-8">
          <h1 className="text-7xl">Thank you</h1>
          <hr className="border border-zinc-400 w-full" />
        </div>
        <div className="flex flex-col items-start text-xl space-y-4">
          <div className="flex items-center space-x-4">
            <i className="bx bx-envelope" />
            <h1>raka.pradana1103@gmail.com</h1>
          </div>
          <a
            href="https://www.linkedin.com/in/rakaprdana/"
            className="flex items-center space-x-4 hover:text-stone-600 duration-700"
          >
            <i className="bx bxl-linkedin" />
            <p>LinkedIn</p>
          </a>
          <a
            href="https://www.instagram.com/rakapradna_"
            className="flex items-center space-x-4 hover:text-stone-600 duration-700"
          >
            <i className="bx bxl-instagram" />
            <p>Instagram</p>
          </a>
          <Link to={"/gallery"}>Gallery</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
