import { useEffect, useState } from "react";
import Certi1 from "../../../assets/certificate/Raka Pradana Martianus - E-Certif SC Introduction to Frontend.png";
import Certi2 from "../../../assets/certificate/Raka-Intermediate JAVA.png";
import Certi3 from "../../../assets/certificate/Raka-Pradana-Certificate_TalentaAI.png";
import Certi4 from "../../../assets/certificate/raka-pradana-certificate-attendance-sefc23.png";
import Certi5 from "../../../assets/certificate/sertifikat_course_dicoding1.png";
import Certi6 from "../../../assets/certificate/Certificate-WebPrograming.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const image = [Certi1, Certi2, Certi3, Certi4, Certi5, Certi6];

interface CertiProps {
  id: number;
  name: string;
  image: string;
}
const CardCertificate = () => {
  const [certificates, setCertificates] = useState<CertiProps[]>([]);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const resp = await fetch("/certificate.json");
        if (!resp.ok) {
          throw new Error("Failed fetch data");
        }
        const data: CertiProps[] = await resp.json();
        const CertifImage = data.map((certificate, index) => ({
          ...certificate,
          image: image[index],
        }));
        setCertificates(CertifImage);
      } catch (error) {
        console.log("Message error: ", error);
      }
    };

    fetchCertificate();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="grid grid-cols-3 gap-4 mt-4 px-8 my-16"
    >
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="max-w-sm bg-white rounded-lg mt-8 dark:bg-zinc-800 hover:bg-zinc-700 shadow hover:-translate-y-5 duration-700"
        >
          <img
            className="rounded-t-lg"
            src={certificate.image}
            alt={certificate.name}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {certificate.name}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCertificate;
