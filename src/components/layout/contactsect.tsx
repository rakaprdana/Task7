import FormContact from "../elements/Form/formcontact";
import ImageCard from "../elements/Card/image";
interface ContactProps {
  id: string;
}
const Contact = ({ id }: ContactProps) => {
  return (
    <>
      <hr className="border border-stone-400 w-3/4 mt-36" />
      <div id={id} className="flex items-center justify-between mx-16 mt-16">
        <ImageCard />
        <FormContact />
      </div>
    </>
  );
};

export default Contact;
