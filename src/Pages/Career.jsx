import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Careercard from "../Components/Career/Careercard";

// Define validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid Email!").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),
  subject: yup.string().required("Domain is required"),
  pdf: yup
    .mixed()
    .required("CV is required")
    .test("fileType", "Only PDF", (value) => {
      return value && value[0] && value[0].type === "application/pdf";
    }),
  message: yup.string().required("Message is required"),
});

const Career = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-image2">
        <div className="bg-gradient-to-r py-12 px-6 md:px-12 element-scroll">
          <div className="max-w-7xl mx-auto grid gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">
                The best place for your{" "}
                <span className=" text-white px-2 py-1 rounded">future</span>
              </h1>
              <p className="text-lg mb-6 text-white">
                We help you to find the best job to build your future and build
                a better future of digital era.
              </p>
              <Careercard />
            </div>
            <div className="flex justify-center items-center">
              <div className="card dark:bg-zinc-800 shadow-lg rounded-lg p-8 max-w-4xl w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Name"
                        id="name"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      />
                      {errors.name && (
                        <p className="text-white">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        placeholder="E-Mail"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      />
                      {errors.email && (
                        <p className="text-white">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("phone")}
                        type="number"
                        id="phone"
                        placeholder="Contact I.D"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="text-white">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <select
                        {...register("subject")}
                        id="subject"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      >
                        <option value="">Domain</option>
                        <option value="others">Others</option>
                      </select>
                      {errors.subject && (
                        <p className="text-white">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-full">
                    <input
                      {...register("pdf")}
                      type="file"
                      id="pdf"
                      accept="application/pdf"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setValue("pdf", e.target.files);
                          document.getElementById("file-name").textContent =
                            file.name;
                        }
                      }}
                    />
                    <label
                      htmlFor="pdf"
                      className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none cursor-pointer"
                    >
                      Choose CV
                      <span
                        id="file-name"
                        className="ml-2 text-sm text-gray-500"
                      ></span>
                    </label>
                    {errors.pdf && (
                      <p className="text-black">{errors.pdf.message}</p>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows="4"
                      placeholder="How can we help you?"
                      className="mt-1 pl-2 pt-2 block w-full rounded-3xl border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                    ></textarea>
                    {errors.message && (
                      <p className="text-white">{errors.message.message}</p>
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
          </div>
          <div className="mt-12 card bg-blue-200 rounded-lg py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-blue-400">
              <div>
                <h2 className="text-3xl text-white font-bold">1.9K+</h2>
                <p className="mt-2 text-white">Placements</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">276K+</h2>
                <p className="mt-2 text-white">Job Seekers Active</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">3.4K+</h2>
                <p className="mt-2 text-white">Incorporated Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;