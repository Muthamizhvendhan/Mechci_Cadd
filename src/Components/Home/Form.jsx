import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  Name: yup.string().required("Name!"),
  Email: yup.string().email("Enter a valid Email!").required("Email!"),
  Phone: yup
    .string()
    .matches(/^\d{10}$/, "Enter a valid 10-digit phone number")
    .required("Number is required"),
  Enquiry: yup
    .string()
    .oneOf(
      ["service1", "service2", "service3"],
      "Kindly select one as enquiry choice"
    )
    .required("Select an Option"),
  Message: yup.string().required("Define your need"),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(isValid);
  return (
    <div className="min-h-screen   flex items-center justify-center p-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row ">
        <div className="md:w-1/2 p-4 text-white rounded-lg md:rounded-r-none">
          <h2 className="text-xl text-[#040486] font-bold mb-4">
            Hotline 24/7
          </h2>
          <Link to="tel:+919340012200" className="text-3xl font-bold mb-8 number underline">(+91) 44444 55555</Link>
          <p className="mb-4 text-black">
            <strong>Address:</strong> 58 Lorem Ipsum, Lorem pisojsum, TN 1
          </p>
          <p className="mb-4 text-black">
            <strong>Email:</strong> contact@text.co
          </p>
          <p className="mb-4 text-black">
            <strong>Fax:</strong> fax@l.co
          </p>
          <p className="mb-4 text-black">
            <strong>Work Hour:</strong> Mon - Sat: 9:00 - 18:00
          </p>
          <Link
            to="https://maps.app.goo.gl/1ZQZBFrWazJdBhQZ8"
            target="_blank"
            className="text-[#7e5beb] font-semibold underline"
          >
            GET DIRECTION
          </Link>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-6 text-[#040486]">
            Request Free Consultancy
          </h2>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="space-y-4"
          >
            <input
              {...register("Name")}
              type="text"
              autoComplete="off"
              placeholder="Name *"
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:mb-3"
            />
            {errors?.Name && (
              <p className="text-red-400">{errors.Name?.message}</p>
            )}
            <input
              {...register("Email")}
              type="email"
              autoComplete="off"
              placeholder="Email *"
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.Email && (
              <p className="text-red-400">{errors.Email?.message}</p>
            )}

            <input
              {...register("Phone")}
              type="number"
              autoComplete="off"
              placeholder="Contact Number *"
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.Phone && (
              <p className="text-red-400">{errors.Phone?.message}</p>
            )}
            {/* Dropdown for Enquiry */}
            <select
              {...register("Enquiry")}
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" >
                Enquiry about
              </option>
              <option value="service1">
                Service 1
              </option>
              <option value="service2">
                Service 2
              </option>
              <option value="service3">
                Service 3
              </option>
            </select>
            {errors?.Enquiry && (
              <p className="text-red-400">{errors.Enquiry?.message}</p>
            )}

            <textarea
              {...register("Message", { required: "Inquiry" })}
              placeholder="Write your inquiry here"
              autoComplete="off"
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
            {errors?.Message && (
              <p className="text-red-400">{errors.Message?.message}</p>
            )}

            <button
              type="submit"
              disabled={isValid}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-zinc-800"
            >
              Request Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
