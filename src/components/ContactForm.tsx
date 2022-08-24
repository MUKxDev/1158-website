import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const requestFor = [
  { id: 1, name: "Business Deck" },
  { id: 2, name: "Investment Memorandum" },
  { id: 3, name: "All Documents" },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPopUp, setShowPopUp] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRequestFor, setSelectedRequestFor] = useState(requestFor[0]);
  const [headerText, setHeaderText] = useState("Success");
  const [bodyText, setBodyText] = useState(
    "An email has been sent successfully"
  );

  const onSubmit = async (data: any) => {
    let emailToSendData = {
      ...data,
      "request-for": selectedRequestFor.name,
    };

    setShowPopUp(false);
    setIsSuccess(false);
    setHeaderText("");
    setBodyText("");
    setIsLoading(true);
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://www.1158.fthm.me/wp-json/contact-form-7/v1/contact-forms/37/feedback",
        data: emailToSendData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);

      // IF success

      if (response.data.status === "mail_sent") {
        setHeaderText("Success");
        setBodyText("An email has been sent successfully.");
        setIsSuccess(true);
        togglePopUp();
      } else {
        setHeaderText("Error");
        setBodyText(`${response.data.message}`);
        setIsSuccess(false);
        togglePopUp();
      }
    } catch (error) {
      console.log(error);
      // IF fails
      setHeaderText("Error");
      setBodyText("An error has occurred while trying to send an email.");
      setIsSuccess(false);
      togglePopUp();
    }
    setIsLoading(false);
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
          <div className="flex flex-col items-start justify-start grow">
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
          {/* <select
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
          </select> */}
          <div className="relative w-full">
            <Listbox
              // {...register("requestFor", { required: true })}
              value={selectedRequestFor}
              onChange={setSelectedRequestFor}
            >
              <Listbox.Button
                className={`cursor-pointer flex py-2 after:[content:'▼'] after:ml-auto after:text-xs items-center asambaInput ${
                  errors["requestFor"] && "!border-red-400"
                }`}
              >
                {selectedRequestFor.name}
              </Listbox.Button>

              <Listbox.Options className="absolute left-0 right-0 flex flex-col gap-2 p-3 text-white bg-black border border-t-0 border-white rounded-b-xl top-full ">
                {requestFor.map((requestFor) => (
                  <Listbox.Option
                    className="px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10"
                    key={requestFor.id}
                    value={requestFor}
                  >
                    {requestFor.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
        </div>
        <button
          className={`btn text-base font-normal px-8 py-3  md:col-span-2 m-0 mx-auto md:mr-0 text-white uppercase duration-150 border border-white hover:border-white rounded-full cursor-pointer bg-white/0 hover:bg-white/10 mt-11 w-fit ${
            isLoading && "loading"
          }`}
          type="submit"
          value="Request Access"
          title="Request Access"
        >
          Request Access
        </button>
      </form>
    </div>
  );
}
