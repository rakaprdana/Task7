const AboutSect = () => {
  return (
    <>
      <section
        id="about"
        className="flex flex-col items-center justify-center my-20 text-zinc-300"
      >
        <h1 className="text-5xl font-bold mb-4">About me</h1>
        <hr className="border border-zinc-500 w-1/2" />
        <p className="mt-8 text-base w-1/2 text-center">
          {" "}
          I’m a passionate developer skilled in ReactJS, Tailwind CSS, and
          modern web development tools. I love creating dynamic user interfaces
          with React and appreciate the utility-first approach of Tailwind CSS.
          Always learning and adapting to stay up-to-date in the ever-changing
          tech world!
        </p>
      </section>
    </>
  );
};
export default AboutSect;
