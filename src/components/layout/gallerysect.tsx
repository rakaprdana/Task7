import Poster1 from "../../assets/poster/1.png";
import Poster5 from "../../assets/poster/5.png";
import Poster3 from "../../assets/poster/3.png";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const image = [Poster1, Poster5, Poster3];
const GallerySect = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex space-x-4 items-center">
        <h1 className="text-6xl ml-12">Gallery</h1>
        <hr className="border border-zinc-500 w-3/4" />
      </div>
      <div className="flex my-12 mb-16">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="grid grid-cols-3 ml-8"
        >
          {image.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt="" className="w-64" />
          ))}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-1/2 ml-8 px-8"
        >
          <p>
            Apart from coding, I’ve dabbled in graphic design, creating several
            posters to hone my skills. Each design has been a canvas for
            exploration—a playground where I experiment with colors, typography,
            and visual storytelling. Whether it’s a minimalist layout or an
            intricate composition, these posters have taught me the art of
            communication through visuals.
          </p>
          <Button
            label="View gallery"
            type="button"
            onClick={() => navigate("/gallery")}
          />
        </div>
      </div>
    </>
  );
};

export default GallerySect;
