import ContactForm from "../components/ContactForm";
import Divider from "../components/Divider";

const Opportunities = () => {
  return (
    <div
      id="opportunities"
      className="flex flex-col justify-center min-h-screen px-8"
    >
      {/* Header */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center mb-5 text-white uppercase header lg:text-6xl"
      >
        <h1 className="max-w-3xl text-4xl font-Mirage font-extralight lg:text-7xl">
          Opportunities
        </h1>
      </div>
      <Divider />
      {/* Form */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <ContactForm></ContactForm>
      </div>
      <Divider />
    </div>
  );
};

export default Opportunities;
