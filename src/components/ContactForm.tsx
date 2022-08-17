import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
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
          className="assambaInput"
          type="text"
          {...register("firstAndLastName", {
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
          className="assambaInput"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <label className="text-base uppercase text-white/30">
          Company Name*
        </label>
        <input
          className="assambaInput"
          type="text"
          {...register("shipName", { required: true, maxLength: 100 })}
        />
      </div>

      <div className="flex flex-col items-start justify-start w-full">
        <label className="text-base uppercase text-white/30">
          Request For*
        </label>
        <select
          className="cursor-pointer assambaInput"
          {...register("requestFor", { required: true })}
        >
          <option value="Business Deck 2022">Business Deck 2022</option>
        </select>
      </div>
      <span></span>
      <input
        className="px-8 py-3 m-0 ml-auto text-white uppercase duration-150 border border-white rounded-full cursor-pointer bg-white/0 hover:bg-white/10 mt-11 w-fit"
        type="submit"
        value="Request Access"
      />
    </form>
  );
}
