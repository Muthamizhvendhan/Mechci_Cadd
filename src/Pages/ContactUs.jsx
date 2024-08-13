import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Cta from "../Components/About/Cta";

const schema = yup.object().shape({
  name: yup.string().required("Name!"),
  email: yup.string().email("Valid Email!").required("Email!"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required!"),
  subject: yup.string().required("Please select an option!"),
  message: yup.string().required("Define your need!"),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-image01">
      <div className="bg-image">
        <div className=" flex flex-col items-center justify-center pt-12 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
          <h2 className="text-3xl font-extrabold text-center text-white">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-2 text-center text-muted-foreground text-white">
            We will contact you again after receiving your request within 24h.
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4">
            <div className="ltspc text-3xl font-bold number ">
              ( +91 ) 55356 46868
            </div>
            <div className="text-center">
              <p className="text-lg text-white">E-Mail: Mechcisolution@gmail.com</p>
              <p className="text-lg text-white">Location: 58 Transit St, Vuen Mt, TN 941</p>
            </div>
          </div>
        </div>

        <div className="pt-[5%] pb-[10%] flex items-center justify-center bg-gradient-to-b ">
          <div className="card dark:bg-zinc-800 shadow-lg rounded-lg p-8 max-w-4xl w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Name"
                    id="name"
                    autoComplete="off"
                    className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    autoComplete="off"
                    placeholder="E-Mail"
                    className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-400">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("phone")}
                    type="number"
                    id="phone"
                    autoComplete="off"
                    placeholder="Contact I.D"
                    className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-red-400">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <select
                    {...register("subject")}
                    id="subject"
                    className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                  >
                    <option value="">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-400">{errors.subject.message}</p>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  {...register("message")}
                  id="message"
                  rows="4"
                  placeholder="How can we help you?"
                  autoComplete="off"
                  className="mt-1 pl-2 pt-2 block w-full rounded-3xl border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-400">{errors.message.message}</p>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="button relative overflow-hidden h-12 px-8 rounded-md bg-[#3d3a4e] text-white border-none cursor-pointer"
                >
                  <span className="button-content relative z-10">
                    Send Your Request
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577.7182536359563!2d80.22029520383322!3d13.073203060892071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e8b0d91553%3A0xe1312e2a11772ab8!2sOrchid%20Center!5e0!3m2!1sen!2sin!4v1720434846532!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <Cta/>
      </div>
    </div>
  );
};

export default ContactUs;