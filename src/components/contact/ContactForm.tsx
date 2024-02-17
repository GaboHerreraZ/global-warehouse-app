"use client";

import { Contact } from "@/interface/contact";
import { sendEmail } from "@/service/send-email";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  translations: any;
}

export const ContactForm = ({ translations }: Props) => {
  const [emailSuccess, setEmailSucces] =  useState<boolean>(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Contact>();

  const onSubmit = async (data: Contact) => {
    const response = await sendEmail(data);
    if(response) setEmailSucces(true);
  };

  if(emailSuccess) return <>Email Enviado correctament</>;

  return (
    <section className="px-5 md:px-20 my-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid text-others font-bold text-xl w-full"
      >
        <div className="grid">
          <label className="py-2">
            {translations.companyName}
            <input
              {...register("companyName", { required: true })}
              className="border-b-2 w-full md:w-1/2   md:ml-2 focus:outline-none focus:border-b-2"
            />
          </label>
          {errors.companyName && (
            <small className="text-red-500 text-xs ">
              {translations.errorCompanyName}
            </small>
          )}
        </div>
        <div className="grid">
          <label className="py-2">
            {translations.contactPerson}
            <input
              {...register("contactPerson", { required: true })}
              className="border-b-2 w-full md:w-1/2   md:ml-2 focus:outline-none focus:border-b-2"
            />
          </label>
          {errors.contactPerson && (
            <small className="text-red-500 text-xs ">
              {translations.errorContactPerson}
            </small>
          )}
        </div>
        <div className="grid">
          <label className="py-2">
            {translations.email}
            <input
              {...register("email", { required: true })}
              className="border-b-2 w-full md:w-1/2    md:ml-2 focus:outline-none focus:border-b-2"
            />
          </label>
          {errors.email && (
            <small className="text-red-500 text-xs ">
              {translations.errorEmail}
            </small>
          )}
        </div>
        <div className="grid">
          <label className="py-2">
            {translations.phoneNumber}
            <input
              {...register("phoneNumber", { required: true })}
              className="border-b-2 w-full md:w-1/2    md:ml-2 focus:outline-none focus:border-b-2"
            />
          </label>
          {errors.phoneNumber && (
            <small className="text-red-500 text-xs ">
              {translations.errorPhoneNumber}
            </small>
          )}
        </div>
        <div className="grid">
          <label className="py-2">
            {translations.message}
            <input
              {...register("message", { required: true })}
              className="border-b-2 w-full md:w-1/2    md:ml-2 focus:outline-none focus:border-b-2"
            />
          </label>
          {errors.message && (
            <small className="text-red-500 text-xs ">
              {translations.errorMessage}
            </small>
          )}
        </div>
        <button
          type="submit"
          className="bg-secondary px-5 text-sm w-36 text-white rounded-xl py-2 mt-4"
        >
          {translations.contactUs}
        </button>
      </form>
    </section>
  );
};
