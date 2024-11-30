import "boxicons";
import { useEffect, useState } from "react";

interface SkillProps {
  icon: string;
  title: string;
}
const SkillSect = () => {
  const [skill, setSkill] = useState<SkillProps[]>([]);

  useEffect(() => {
    setSkill([
      { icon: "bx bxl-react", title: "React" },
      { icon: "bx bxl-typescript", title: "Typescript" },
      { icon: "bx bxl-tailwind-css", title: "Tailwind CSS" },
      { icon: "bx bxl-python", title: "Python" },
    ]);
  }, []);
  return (
    <>
      <section
        id="skills"
        className="bg-zinc-800 text-zinc-400 flex flex-col items-center justify-center py-8 text-3xl"
      >
        <h1 className="text-2xl mb-16">Programing Tools and Language</h1>
        <div className="flex items-center justify-center space-x-8 ">
          {skill.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <i className={item.icon}></i>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillSect;
