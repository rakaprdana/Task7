import CardProject from "../elements/Card/project";

const ProjectSect = () => {
  return (
    <>
      <section
        id="project"
        className="flex flex-col items-center justify-center mt-28 text-zinc-300"
      >
        <h1 className="text-6xl">Projects</h1>
        <hr className="border border-zinc-400 w-1/2 my-4" />
        <p>I’ve worked on several projects that I created</p>
        <CardProject />
      </section>
    </>
  );
};

export default ProjectSect;
