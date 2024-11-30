import CardCertificate from "../elements/Card/certificate";

const CertiSect = () => {
  return (
    <>
      <section
        id="project"
        className="flex flex-col items-center justify-center mt-12 text-zinc-300"
      >
        <h1 className="text-6xl">Certificate</h1>
        <hr className="border border-zinc-400 w-1/2 my-4" />
        <p>Here are the best certificates I obtained</p>
        <CardCertificate />
      </section>
    </>
  );
};

export default CertiSect;
