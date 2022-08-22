import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://www.1158.fthm.me/wp-json/contact-form-7/v1/contact-forms/37/feedback",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(errors);

  return (
    <form
      className="container grid max-w-3xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-start justify-start w-full">
        <label className="text-base uppercase text-white/30">
          First and last name*
        </label>
        <input
          className="asambaInput"
          type="text"
          {...register("first-last-name", {
            required: true,
            maxLength: 80,
          })}
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <label className="text-base uppercase text-white/30">
          Email address*
        </label>
        <input
          className="asambaInput"
          type="email"
          {...register("your-email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <label className="text-base uppercase text-white/30">
          Company Name*
        </label>
        <input
          className="asambaInput"
          type="text"
          {...register("company-name", { required: true, maxLength: 100 })}
        />
      </div>

      <div className="flex flex-col items-start justify-start w-full">
        <label className="text-base uppercase text-white/30">
          Request For*
        </label>
        <select
          className="cursor-pointer asambaInput"
          {...register("requestFor", { required: true })}
        >
          <option defaultValue="Business Deck">Business Deck</option>
          <option defaultValue="Investment Memorandum">Investment Memorandum</option>
          <option defaultValue="All Documents">All Documents</option>
        </select>
      </div>
      <input
        className="px-8 py-3  md:col-span-2 m-0 mx-auto md:mr-0 text-white uppercase duration-150 border border-white rounded-full cursor-pointer bg-white/0 hover:bg-white/10 mt-11 w-fit"
        type="submit"
        value="Request Access"
      />
    </form>
  );
}
