import Poster1 from "../assets/poster/1.png";
import Poster2 from "../assets/poster/2.png";
import Poster3 from "../assets/poster/3.png";
import Poster4 from "../assets/poster/4.png";
import Poster5 from "../assets/poster/5.png";
import Poster6 from "../assets/poster/6.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import { useEffect, useState } from "react";
import Copyright from "../components/layout/copyright";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const image = [Poster1, Poster2, Poster3, Poster4, Poster5, Poster6];
interface PosterProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const GalleryPage = () => {
  const [posters, setPosters] = useState<PosterProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataPoster = async () => {
      try {
        const resp = await fetch("/poster.json");
        if (!resp.ok) {
          throw new Error("Failed fetch data");
        }
        const data: PosterProps[] = await resp.json();
        const PosterImage = data.map((poster, index) => ({
          ...poster,
          image: image[index],
        }));
        setPosters(PosterImage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataPoster();
  });
  return (
    <>
      <Button onClick={() => navigate("/")} label="Home" type="button" />
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-6xl">My Gallery</h1>
        <hr className="border border-zinc-500 w-1/2 my-4" />
        <p>
          Welcome to my gallery, this page was created to show you some poster
          has been created
        </p>

        {posters.map((poster) => (
          <div
            key={poster.id}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex space-x-8 mt-8 p-8"
          >
            <img
              src={poster.image}
              alt={poster.name}
              className="w-64 rounded-md"
            />
            <div className="bg-stone-700 p-4 space-y-4 rounded-lg">
              <h1 className="text-5xl font-bold">{poster.name}</h1>
              <p className="text-lg">{poster.description}</p>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-4 w-16 rounded-full bg-stone-800 hover:bg-zinc-800 active:bg-stone-950 text-white shadow-lg hover:shadow-xl active:shadow-none transition-all duration-500"
        >
          <i className="bx bx-chevron-up text-2xl font-bold"></i>
        </button>
        <Button label="Home" type="button" onClick={() => navigate("/")} />
      </div>
      <Copyright />
    </>
  );
};

export default GalleryPage;
