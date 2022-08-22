import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPopUp, setShowPopUp] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [headerText, setHeaderText] = useState("Success");
  const [bodyText, setBodyText] = useState(
    "An email has been sent successfully"
  );

  const onSubmit = async (data: any) => {
    setShowPopUp(false);
    setIsSuccess(false);
    setHeaderText("");
    setBodyText("");

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://www.1158.fthm.me/wp-json/contact-form-7/v1/contact-forms/37/feedback",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);

      // IF success
      setHeaderText("Success");
      setBodyText("An email has been sent successfully.");
      setIsSuccess(true);
      togglePopUp();
    } catch (error) {
      console.log(error);
      // IF fails
      setHeaderText("Fails");
      setBodyText("An error has occurred while trying to send an email.");
      setIsSuccess(false);
      togglePopUp();
    }
  };

  function togglePopUp() {
    setShowPopUp(!showPopUp);
  }

  return (
    <div>
      {/* Response Message */}
      {showPopUp && (
        <div
          className={`flex max-w-3xl mx-auto justify-between m-2 mb-4  items-center border  rounded-md px-6 py-2 ${
            isSuccess
              ? "text-success border-success"
              : "text-error border-error"
          }`}
        >
          {/* header & body */}
          <div className="flex flex-col justify-start items-start grow">
            <p>{headerText}</p>
            <p>{bodyText}</p>
          </div>
          {/* close buttone */}
          <div
            onClick={togglePopUp}
            className={`btn btn-sm  rounded-md min-w-fit ${
              isSuccess ? "btn-success" : "btn-error"
            }`}
          >
            x
          </div>
        </div>
      )}
      {/* Form */}
      <form
        className="container grid max-w-3xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`flex flex-col items-start justify-start w-full `}>
          <label className="text-base uppercase text-white/30">
            First and last name*
          </label>
          <input
            className={`asambaInput ${
              errors["first-last-name"] && "!border-red-400"
            }`}
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
            className={`asambaInput ${
              errors["your-email"] && "!border-red-400"
            }`}
            type="email"
            {...register("your-email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <label className="text-base uppercase text-white/30">
            Company Name*
          </label>
          <input
            className={`asambaInput ${
              errors["company-name"] && "!border-red-400"
            }`}
            type="text"
            {...register("company-name", { required: true, maxLength: 100 })}
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <label className="text-base uppercase text-white/30">
            Request For*
          </label>
          <select
            className={`cursor-pointer asambaInput ${
              errors["requestFor"] && "!border-red-400"
            }`}
            {...register("requestFor", { required: true })}
          >
            <option defaultValue="Business Deck">Business Deck</option>
            <option defaultValue="Investment Memorandum">
              Investment Memorandum
            </option>
            <option defaultValue="All Documents">All Documents</option>
          </select>
        </div>
        <input
          className="px-8 py-3  md:col-span-2 m-0 mx-auto md:mr-0 text-white uppercase duration-150 border border-white rounded-full cursor-pointer bg-white/0 hover:bg-white/10 mt-11 w-fit"
          type="submit"
          value="Request Access"
        />
      </form>
      {/* {showPopUp && (
        // <div className="flex flex-col items-center justify-center w-screen z-40 top-0 left-0 fixed">
        //   <div className="bg-teal-600 min-h-[300px] min-w-[300px]  "></div>
        // </div>
        
      )} */}
      {/* <div>
        <input
          type="checkbox"
          id="my-modal-3"
          className="modal-toggle"
          checked={showPopUp}
        />
        <div className="modal bg-transparent">
          <div className="modal-box relative shadow-xl">
            <label
              htmlFor="my-modal-3"
              onClick={togglePopUp}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">{headerText}</h3>
            <p className="py-4">{bodyText}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
