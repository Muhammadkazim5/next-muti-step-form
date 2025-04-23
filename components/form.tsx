"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Organization from "../public/images/orgs.png";
import Individual from "../public/images/individual.png";
import Radio from "../public/images/radio.png";
import Coffee from "../public/images/coffee.png";
import Check from "../public/images/check.png";
import Circle from "../public/images/circle.png";
import Setting from "../public/images/setting.png";
import Testimonials from "../public/images/testimonials.png";
import Pro from "../public/images/pro.png";
import BgCheck from "../public/images/bgcheck.png";
import Coffe from "../public/images/coffe.png";
import Orginfo from "../public/images/orginfo.png";
import Compaign from "../public/images/compaign.png";
import HouseBlend from "../public/images/house_blend.png";
import DarkRoast from "../public/images/dark_roast.png";
import TravelTumbler from "../public/images/travel_tumbler.png";
import TeamSetup from "../public/images/teamsetup.png";
import Email from "../public/images/email.png";
import Explores from "../public/images/explores.png";
import Save from "../public/images/save.png";
import Announce from "../public/images/announce.png";
import Facebook from "../public/images/facebook.png";
import Instagram from "../public/images/instagram.png";
import Message from "../public/images/message.png";
import Twitter from "../public/images/twitter.png";
import { PiChatsCircleBold } from "react-icons/pi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiMiniUserPlus } from "react-icons/hi2";
import { z } from "zod";
import { FormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { RiDeleteBin7Line } from "react-icons/ri";
type Inputs = z.infer<typeof FormDataSchema>;
const steps = [
  {
    id: "Step 1",
    name: "Getting Started",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "Step 2",
    name: "Campaign Details",
    fields: ["country", "state", "city", "street", "zip"],
  },
  {
    id: "Step 3",
    name: "Product Selection",
  },
  {
    id: "Step 4",
    name: "Team Setup",
  },
  {
    id: "Step 5",
    name: "Final Review",
  },
  { id: "Step 6", name: "Complete" },
];

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    setCurrentStep((step) => step + 1);
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section>
      {/* steps */}
      <nav aria-label="Progress">
        <div className="w-full  bg-[#F5F5F5] flex items-center justify-between p-10">
          <div>
            <div className="text-xs font-medium text-yellow-700 bg-yellow-100 rounded px-2 py-1 w-max ">
              About 5 minutes to complete
            </div>
            <h1 className="text-4xl py-4 font-bold text-gray-900">
              START YOUR EVERYGRIND FUNDRAISER
            </h1>
            <p className="text-sm text-gray-600">
              Set up in minutes. Earn 60% on every sale.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button
              type="button"
              className="border border-gray-300 text-gray-700 text-sm px-4 py-1.5 rounded-md hover:bg-gray-100 transition"
            >
              Save & Continue Later
            </button>
            <div className="w-40">
              <div className="h-2 rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-sky-600 transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Step {currentStep + 1} of {steps.length} –{" "}
                {steps[currentStep].name}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="absolute inset-0 flex flex-col justify-between p-24">
        {/* Form */}
        <form className="mt-12 py-12" onSubmit={handleSubmit(processForm)}>
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-xl uppercase font-bold text-center mt-10">
                WHO'S RAISING FUNDS?
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 text-center">
                Tell us who you're fundraising for so we can set up the perfect
                campaign.
              </p>

              <div className="mt-10 flex flex-col gap-y-5 justify-center max-w-2/5 mx-auto">
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Fundraiser Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="e.g., Lincoln Dragons Basketball Equipment Fund"
                      id="firstName"
                      {...register("firstName")}
                      autoComplete="given-name"
                      className="block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.firstName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between py-3">
                    <p>Be specific to engage your supporters</p>
                    <p>70 characters remaining</p>
                  </div>
                </div>
                <div className="mb-3 border border-gray-400 p-10 rounded-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-[#ECE657] p-5 rounded-xl ">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <Image src={Organization} alt="Organization" />
                          <h1 className="text-xl uppercase font-bold ">
                            Organization
                          </h1>
                        </div>
                        <p>Team, school, nonprofit, etc.</p>
                      </div>
                    </div>
                    <div className="border border-gray-400 p-5 rounded-xl ">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <Image src={Individual} alt="Individual" />
                          <h1 className="text-xl uppercase font-bold ">
                            Individual
                          </h1>
                        </div>
                        <p>For personal causes or projects</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <h1 className="text-2xl text-bold uppercase py-2">
                    Organization Details
                  </h1>
                  <div className="mb-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Organization Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="e.g., Lincoln High Dragons"
                        id="orgName"
                        autoComplete="given-name"
                        className="block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {/* {errors.orgName?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.orgName.message}
                    </p>
                  )} */}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Organization Type
                    </label>
                    <div className="mt-2">
                      <select
                        id="orgType"
                        autoComplete="orgType"
                        className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      >
                        <option value="">Select Organization Type</option>
                        <option> Organization Type 1</option>
                        <option> Organization Type 2</option>
                        <option> Organization Type 3</option>
                      </select>
                      {/* {errors.orgType?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.orgType.message}
                    </p>
                  )} */}
                    </div>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <h1 className="text-2xl font-bold py-2 uppercase">
                    Personal Details
                  </h1>
                  <p className="pb-2">
                    This person will be the main point of contact for your
                    fundraiser.
                  </p>
                  <div className="mb-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="firstName"
                        {...register("firstName")}
                        autoComplete="given-name"
                        className="block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {errors.firstName?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="lastName"
                        {...register("lastName")}
                        autoComplete="given-name"
                        className="block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {errors.lastName?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        autoComplete="email"
                        className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {errors.email?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        type="phone"
                        // {...register('phone')}
                        autoComplete="phone"
                        className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {/* {errors.phone?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.phone.message}
                      </p>
                    )} */}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Position/Role
                    </label>
                    <div className="mt-2">
                      <input
                        id="role"
                        type="role"
                        placeholder="e.g., Coach, Team Director, PTA President"
                        // {...register('role')}
                        autoComplete="role"
                        className="block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {/* {errors.role?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.role.message}
                      </p>
                    )} */}
                    </div>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-5 rounded-lg flex flex-col space-y-4">
                  <div className="flex  gap-2">
                    <span className="bg-yellow-300 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                      +
                    </span>
                    <h1 className="text-xl  font-bold uppercase">
                      ADD BACKUP CONTACT (RECOMMENDED)
                    </h1>
                  </div>
                  <p>
                    Adding a second contact ensures your team always has access
                    to the fundraiser.
                  </p>
                </div>
                <div className="p-6 border border-gray-600 flex gap-5 rounded-xl shadow-md bg-white">
                  <Image
                    src={Testimonials}
                    alt="testimonial"
                    className="w-28 h-28"
                  />
                  <div className="flex flex-col space-y-2">
                    <p className="text-yellow-500 mt-2">⭐⭐⭐⭐</p>
                    <p className="italic text-gray-700 mb-2">
                      "Setting up our basketball team's fundraiser took less
                      than 10 minutes. The process was so smooth, and we raised
                      $3,200 in our first week!"
                    </p>
                    <div className="text-sm font-semibold text-black">
                      Sarah T., High School Basketball Coach
                    </div>
                  </div>
                </div>
                <button
                  onClick={next}
                  className="w-full py-3 bg-black rounded-3xl text-white text-center  text-xl font-bold"
                >
                  CONTINUE TO CAMPAIGN DETAILS
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mt-10 flex flex-col gap-y-5 justify-center max-w-2/5 mx-auto">
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <h1 className="text-2xl font-bold uppercase py-2">
                    Campaign Period
                  </h1>
                  <p className="pb-5">
                    Most successful campaigns run 3-6 weeks
                  </p>
                  <div className="mb-3">
                    <label
                      htmlFor="start_date"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Start Date
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="start_date"
                        // {...register('start_date')}
                        autoComplete="start_date"
                        className="block w-full rounded-xl px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {/* {errors.start_date?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.start_date.message}
                      </p>
                    )} */}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="end_date"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      End Date
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="end_date"
                        // {...register('end_date')}
                        autoComplete="end_date"
                        className="block w-full rounded-xl px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {/* {errors.end_date?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.end_date.message}
                      </p>
                    )} */}
                    </div>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <h1 className="text-2xl font-bold uppercase py-2">
                    Fundraising goal
                  </h1>
                  <p className="pb-5">
                    Aim high! Organizations typically raise $80-100 per
                    participant
                  </p>
                  <div className="mb-3">
                    <label
                      htmlFor="goal_amount"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Goal Amount
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        placeholder="$3000"
                        id="goal_amount"
                        // {...register('goal_amount')}
                        autoComplete="goal_amount"
                        className="block w-full rounded-xl px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {/* {errors.goal_amount?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.goal_amount.message}
                      </p>
                    )} */}
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between">
                        <p>$0</p>
                        <p>$5000</p>
                      </div>
                      <input type="range" name="" id="" className="w-full" />
                      <p className="text-center pt-2">
                        With 30 participants, we estimate you can raise $3,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Fundraiser Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="e.g., Lincoln Dragons Basketball Equipment Fund"
                      id="firstName"
                      {...register("firstName")}
                      autoComplete="given-name"
                      className="block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.firstName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between py-3">
                    <p>Be specific to engage your supporters</p>
                    <p>70 characters remaining</p>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-5 rounded-lg">
                  <h1 className="text-2xl font-bold uppercase py-2">
                    Delivery Options
                  </h1>
                  <p className="pb-4">
                    Based on your location, we offer these delivery options:
                  </p>
                  <div className="flex flex-col space-y-3">
                    <div className="border border-[#ECE657] p-5 rounded-lg ">
                      <div className="flex flex-col">
                        <h1 className="text-2xl font-bold uppercase py-2">
                          Local Pickup
                        </h1>
                        <p>Available within 25 miles of ZIP 12345</p>
                      </div>
                    </div>
                    <div className="border border-gray-400 p-5 rounded-lg ">
                      <div className="flex flex-col">
                        <h1 className="text-2xl font-bold uppercase py-2">
                          Direct Shipping
                        </h1>
                        <p>
                          Coffee shipped directly to supporters ($5.99 flat
                          rate)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Additional Notes (Optional)
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="notes"
                      rows={4}
                      id="notes"
                      placeholder="Any special instructions or details we should know"
                      className="block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    ></textarea>
                    {/* {errors.notes?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.notes.message}
                      </p>
                    )} */}
                  </div>
                </div>
                <div className="p-6 border border-gray-600 flex gap-5 rounded-xl shadow-md bg-white">
                  <Image
                    src={Testimonials}
                    alt="testimonial"
                    className="w-28 h-28"
                  />
                  <div className="flex flex-col space-y-2">
                    <p className="text-yellow-500 mt-2">⭐⭐⭐⭐</p>
                    <p className="italic text-gray-700 mb-2">
                      "Setting up our basketball team's fundraiser took less
                      than 10 minutes. The process was so smooth, and we raised
                      $3,200 in our first week!"
                    </p>
                    <div className="text-sm font-semibold text-black">
                      Sarah T., High School Basketball Coach
                    </div>
                  </div>
                </div>
                <button
                  onClick={next}
                  className="w-full py-3 bg-black rounded-3xl text-white text-center  text-xl font-bold"
                >
                  CONTINUE TO CAMPAIGN DETAILS
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className=" bg-[#ECE876] px-3 py-2">
                Organizations offering <span>6-10 products</span>raise{" "}
                <span>35% more</span>on average
              </div>
              <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
                Choose Your Coffee Selection
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 text-center">
                Select the premium coffee products your supporters will love.
              </p>

              <div className="mt-10 flex flex-col gap-y-5 justify-center max-w-2/5 mx-auto">
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Fundraiser Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="e.g., Lincoln Dragons Basketball Equipment Fund"
                      id="firstName"
                      {...register("firstName")}
                      autoComplete="given-name"
                      className="block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    />
                    {errors.firstName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between py-3">
                    <p>Be specific to engage your supporters</p>
                    <p>70 characters remaining</p>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-8 rounded-lg">
                  <div className="p-4 border border-[#ECE657] rounded-xl">
                    <div className="flex gap-2 items-center py-3">
                      <Image
                        src={Radio}
                        alt="Radio"
                        className="h-[25] w-[25]"
                      />
                      <h1 className="text-2xl font-bold uppercase">
                        Use Our Best Sellers
                      </h1>
                    </div>
                    <p>
                      Our curated selection of top-performing coffees. Let's be
                      real: these are proven winners that maximize sales.
                    </p>
                    <div className="flex gap-4 flex-wrap py-4">
                      <Image src={Coffee} alt="Coffee" className="rounded-lg" />
                      <Image src={Coffee} alt="Coffee" className="rounded-lg" />
                      <Image src={Coffee} alt="Coffee" className="rounded-lg" />
                      <Image src={Coffee} alt="Coffee" className="rounded-lg" />
                      <Image src={Coffee} alt="Coffee" className="rounded-lg" />
                      <Image src={Coffee} alt="Coffee" className="rounded-lg" />
                      <Image src={Coffee} alt="Coffee" className="rounded-lg" />
                      <Image src={Coffee} alt="Coffee" className="rounded-lg" />
                    </div>
                    <div className="flex gap-4 pb-8">
                      <Image src={Check} alt="Check" className="rounded-lg" />
                      <p>
                        Quick and easy: we've done the product selection for you
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-8 rounded-lg">
                  <div className="p-4 border border-[#ECE657] rounded-xl">
                    <div className="flex gap-2 items-center py-3">
                      <Image
                        src={Circle}
                        alt="Circle"
                        className="h-[25] w-[25]"
                      />
                      <h1 className="text-2xl font-bold uppercase">
                        Build Your Custom Selection
                      </h1>
                    </div>
                    <p>
                      Handpick from our full catalog to create your perfect
                      lineup. Want to feature local roasts? You've got options.
                    </p>
                    <div className="flex gap-4 flex-wrap py-4">
                      <Image
                        src={Coffee}
                        alt="Coffee"
                        className="rounded-lg w-[140px]"
                      />
                      <Image
                        src={Coffee}
                        alt="Coffee"
                        className="rounded-lg w-[140px]"
                      />
                      <Image
                        src={Coffee}
                        alt="Coffee"
                        className="rounded-lg w-[140px]"
                      />
                      <Image
                        src={Coffee}
                        alt="Coffee"
                        className="rounded-lg w-[140px]"
                      />
                      <Image
                        src={Coffee}
                        alt="Coffee"
                        className="rounded-lg w-[140px]"
                      />
                      <Image
                        src={Coffee}
                        alt="Coffee"
                        className="rounded-lg w-[140px]"
                      />
                    </div>
                    <div className="flex gap-4 pb-8">
                      <Image
                        src={Setting}
                        alt="Setting"
                        className="rounded-lg"
                      />
                      <p>Customize your offering with 4-12 products</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 border flex gap-5 rounded-xl shadow-md bg-white">
                  <Image
                    src={Testimonials}
                    alt="testimonial"
                    className="w-28 h-28"
                  />
                  <div className="flex flex-col space-y-2">
                    <p className="text-yellow-500 mt-2">⭐⭐⭐⭐</p>
                    <p className="italic text-gray-700 mb-2">
                      "Setting up our basketball team's fundraiser took less
                      than 10 minutes. The process was so smooth, and we raised
                      $3,200 in our first week!"
                    </p>
                    <div className="text-sm font-semibold text-black">
                      Sarah T., High School Basketball Coach
                    </div>
                  </div>
                </div>
                <div
                  onClick={prev}
                  className="flex justify-between items-center"
                >
                  <p>Back</p>
                  <button
                    onClick={next}
                    className="px-4 py-3 bg-black rounded-3xl text-white text-center  text-xl font-bold"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-2xl font-bold uppercase text-center">
                SET UP YOUR TEAM
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 text-center">
                Get ready to involve your participants.
              </p>

              <div className="mt-10 flex flex-col gap-y-5 justify-center max-w-2/5 mx-auto">
                <div className="mb-3 border border-gray-400 p-10 rounded-lg">
                  <h1 className="w-[95%] text-2xl font-bold uppercase">
                    WOULD YOU LIKE TO ADD TEAM MEMBERS NOW OR AFTER APPROVAL?
                  </h1>
                  <p className="pb-4">
                    You can always add more team members later.
                  </p>
                  <div className="space-y-4">
                    <button className="w-full rounded-3xl border border-gray-400 p-2 text-center flex justify-center items-center gap-14 text-2xl font-bold">
                      <HiMiniUserPlus className="text-2xl" /> ADD TEAM NOW
                    </button>
                    <button className="w-full rounded-3xl border border-gray-400 p-2 text-center flex justify-center items-center gap-14 text-2xl font-bold">
                      <HiMiniUserPlus className="text-2xl" /> ADD TEAM NOW
                    </button>
                  </div>
                </div>
                <div className="mb-3 border border-gray-400 p-5 rounded-lg">
                  <div className="flex gap-2 ">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="border border-gray-500 px-3 py-2 rounded-4xl w-32"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="border border-gray-500 px-3 py-2 rounded-4xl w-32"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="role">Role</label>
                      <input
                        type="text"
                        name="role"
                        id="role"
                        className="border border-gray-500 py-2 rounded-4xl w-32"
                      />
                    </div>
                    <div className="mt-7 w-10 h-10 flex items-center justify-center border border-gray-400 p-2  rounded-full">
                      <RiDeleteBin7Line />
                    </div>
                  </div>
                  <p className="pt-3 text-lg">+ ADD ANOTHER MEMBER</p>
                </div>
                <div className="mb-3 border border-gray-400 p-5 rounded-lg">
                  <Image src={Pro} alt="Pro" />
                  <h1 className="text-xl font-bold py-2 uppercase">
                    IDENTITY VERIFICATION REQUIRED
                  </h1>
                  <p>
                    To ensure security and enable payouts, we'll need to verify
                    your identity before funds are distributed. This takes less
                    than 2 minutes and requires a government-issued ID.
                  </p>
                </div>
                <div className="py-3 flex gap-3">
                  <input
                    type="checkbox"
                    name="check"
                    defaultChecked
                    id="check"
                  />
                  <p>
                    I agree to Everygrind's Terms of Service and Privacy Policy
                  </p>
                </div>
                <div className="p-6 border flex gap-5 rounded-xl shadow-md bg-white">
                  <Image
                    src={Testimonials}
                    alt="testimonial"
                    className="w-28 h-28"
                  />
                  <div className="flex flex-col space-y-2">
                    <p className=" mt-2">⭐⭐⭐⭐4.8/5</p>
                    <p className="italic text-gray-700 mb-2">
                      "Setting up our basketball team's fundraiser took less
                      than 10 minutes. The process was so smooth, and we raised
                      $3,200 in our first week!"
                    </p>
                    <div className="text-sm font-semibold text-black">
                      Sarah T., High School Basketball Coach
                    </div>
                  </div>
                </div>
                <button
                  onClick={next}
                  className="w-full py-3 bg-black rounded-3xl text-white text-center  text-xl font-bold"
                >
                  CONTINUE TO FINAL REVIEW
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mt-10 flex flex-col gap-y-5 justify-center max-w-2/5 mx-auto">
                <div className="mb-3 border-2 border-dashed bg-[#d7f5e4] border-green-400 p-10 rounded-lg">
                  <Image src={BgCheck} alt="check" className="mx-auto" />
                  <h1 className="text-center py-4 text-3xl font-bold uppercase">
                    SET UP YOUR TEAM
                  </h1>
                  <p className="text-center">
                    Get ready to involve your participants.
                  </p>
                </div>
                <div className="mb-3 border border-gray-500 p-5 rounded-lg">
                  <h1 className="text-2xl text-bold uppercase py-2">
                    Organization Details
                  </h1>
                  <div className="mb-3 relative">
                    <div className="mt-2">
                      <Image
                        src={Orginfo}
                        alt="org_info"
                        className="absolute top-3 left-2"
                      />
                      <select
                        id="orgType"
                        autoComplete="orgType"
                        className="block w-full rounded-xl px-7 border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      >
                        <option value="">Select Organization Type</option>
                        <option> Organization Type 1</option>
                        <option> Organization Type 2</option>
                        <option> Organization Type 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 relative">
                    <div className="mt-2">
                      <Image
                        src={Compaign}
                        alt="Compaign"
                        className="absolute top-3 left-2"
                      />
                      <select
                        id="orgType"
                        autoComplete="orgType"
                        className="block w-full rounded-xl px-7 border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      >
                        <option value="">Campaign Details</option>
                        <option> Organization Type 1</option>
                        <option> Organization Type 2</option>
                        <option> Organization Type 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="border mb-3 border-gray-400 p-5 rounded-xl">
                    <div className="flex justify-between px-2">
                      <div className="flex gap-4">
                        <Image src={Coffe} alt="coffee" />
                        <span>Selected Products</span>
                      </div>
                      <a href="#" className="underline text-blue-400">
                        edit
                      </a>
                    </div>
                    <div className="border border-gray-400 p-4 mt-4 rounded-xl">
                      <Image
                        src={HouseBlend}
                        alt="House Blend"
                        className="w-full"
                      />
                      <h1 className="text-center py-2">House Blend</h1>
                      <p className="text-center text-gray-500">$18.99</p>
                    </div>
                    <div className="border border-gray-400 p-4 mt-4 rounded-xl">
                      <Image
                        src={DarkRoast}
                        alt="Dark Roast"
                        className="w-full"
                      />
                      <h1 className="text-center py-2">Dark Roast</h1>
                      <p className="text-center text-gray-500">$18.99</p>
                    </div>
                    <div className="border border-gray-400 p-4 mt-4 rounded-xl">
                      <Image
                        src={TravelTumbler}
                        alt="Travel Tumbler"
                        className="w-full"
                      />
                      <h1 className="text-center py-2">Travel Tumbler</h1>
                      <p className="text-center text-gray-500">$18.99</p>
                    </div>
                  </div>
                  <div className="mb-3 relative">
                    <div className="mt-2">
                      <Image
                        src={TeamSetup}
                        alt="TeamSetup"
                        className="absolute top-3 left-2"
                      />
                      <select
                        id="orgType"
                        autoComplete="orgType"
                        className="block w-full rounded-xl px-10 border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      >
                        <option value="">Team Setup</option>
                        <option> Team Setup 1</option>
                        <option> Team Setup 2</option>
                        <option> Team Setup 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="py-3 flex gap-3 items-center">
                  <input
                    type="checkbox"
                    name="check"
                    defaultChecked
                    id="check"
                  />
                  <p>
                    I've reviewed all details and I'm ready to submit my
                    fundraiser for approval. I understand that our team will
                    review it within 1 business day.
                  </p>
                </div>
                <div className="mb-3 border border-gray-500 p-5 rounded-lg">
                  <h1 className="text-2xl font-bold uppercase pt-2 pb-4">
                    Projected Earnings
                  </h1>
                  <div className="flex flex-col space-y-3">
                    <div className="border border-[#ECE657] p-5 rounded-lg ">
                      <div className="flex flex-col">
                        <h1 className="text-2xl text-center font-bold uppercase py-2">
                          $2,400
                        </h1>
                        <p className="text-center">Minimum</p>
                      </div>
                    </div>
                    <div className="border border-gray-400 p-5 rounded-lg ">
                      <div className="flex flex-col">
                        <h1 className="text-2xl font-bold uppercase py-2 text-center">
                          $4,800
                        </h1>
                        <p className="text-center">Target</p>
                      </div>
                    </div>
                    <div className="border border-gray-400 p-5 rounded-lg ">
                      <div className="flex flex-col ">
                        <h1 className="text-2xl font-bold uppercase py-2 text-center">
                          $7,200
                        </h1>
                        <p className="text-center">Stretch Goal</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 border flex gap-5 rounded-xl shadow-md bg-white">
                  <Image
                    src={Testimonials}
                    alt="testimonial"
                    className="w-28 h-28"
                  />
                  <div className="flex flex-col space-y-2">
                    <p className=" mt-2">⭐⭐⭐⭐4.8/5</p>
                    <p className="italic text-gray-700 mb-2">
                      "Setting up our basketball team's fundraiser took less
                      than 10 minutes. The process was so smooth, and we raised
                      $3,200 in our first week!"
                    </p>
                    <div className="text-sm font-semibold text-black">
                      Sarah T., High School Basketball Coach
                    </div>
                  </div>
                </div>
                <button
                  onClick={next}
                  className="w-full py-3 bg-black rounded-3xl text-white text-center  text-xl font-bold"
                >
                  SUBMIT YOUR FUNDRAISER
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 5 && (
            <div className="mt-[-35px] mx-[-95px] border-t-2">
              <div className=" bg-[#F5F5F5]  p-20 ">
                <Image src={BgCheck} alt="check" className="mx-auto" />
                <h1 className="text-center py-4 text-3xl font-bold uppercase">
                  Fundraiser Submitted Successfully!
                </h1>
                <p className="text-center">
                  Time to celebrate! We're reviewing your fundraiser now.
                </p>
                <p className="pt-4 text-center">
                  Your fundraiser has been submitted and is under review. We'll
                  be in touch within 1 business day to get you up and running.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-y-5 justify-center max-w-2/5 mx-auto">
                <div className="mb-3 border border-gray-500 p-3 rounded-lg">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-gray-500 p-3 rounded-lg">
                      <div className="flex">
                        <Image src={Email} alt="email" />
                        <h1 className="text-xl font-bold uppercase">
                          Check Your Email
                        </h1>
                      </div>
                      <p>Confirmation sent to example@email.com</p>
                    </div>
                    <div className="border  border-gray-500 p-3 rounded-lg">
                      <div className="flex ">
                        <Image src={Explores} alt="email" />
                        <h1 className="text-xl font-bold uppercase">
                          Explore Dashboard
                        </h1>
                      </div>
                      <p>Get familiar with your fundraising tools</p>
                      <a href="#" className="underline text-blue-500">
                        Go to Dashboard →
                      </a>
                    </div>
                    <div className="border  border-gray-500 p-3 rounded-lg">
                      <div className="flex ">
                        <Image src={Save} alt="email" />
                        <h1 className="text-xl font-bold uppercase">
                          Bookmark This Page
                        </h1>
                      </div>
                      <p>For easy access to your fundraiser</p>
                    </div>
                    <div className="border  border-gray-500 p-3 rounded-lg">
                      <div className="flex">
                        <Image src={Announce} alt="email" />
                        <h1 className="text-xl font-bold uppercase">
                          Prep Your Announcement
                        </h1>
                      </div>
                      <p>Start drafting your team message</p>
                      <a href="#" className="underline text-blue-500">
                        See Templates →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="socials">
                  <h1 className="text-center text-2xl font-bold uppercase">
                    Excited? Let your network know you're about to launch
                    something great!
                  </h1>
                  <div className="icons flex gap-4 justify-center py-5">
                    <Image src={Facebook} alt="Facebook" />
                    <Image src={Twitter} alt="Twitter" />
                    <Image src={Instagram} alt="Instagram" />
                    <Image src={Message} alt="Message" />
                  </div>
                </div>
                <div className="mb-3 border border-gray-400 p-6 rounded-lg">
                  <h1 className="text-2xl font-bold uppercase">
                    Projected Earnings
                  </h1>
                  <div className="space-y-4 mt-4">
                    <button className="w-full rounded-3xl border border-gray-400 p-2 text-center flex justify-center items-center gap-14 text-2xl font-bold">
                      <PiChatsCircleBold className="text-2xl" /> Chat Support
                    </button>
                    <button className="w-full rounded-3xl border border-gray-400 p-2 text-center flex justify-center items-center gap-14 text-2xl font-bold">
                      <FaRegCircleQuestion className="text-2xl" /> View FAQs
                    </button>
                    <button className="w-full rounded-3xl border border-gray-400 p-2 text-center flex justify-center items-center gap-14 text-2xl font-bold">
                      <FaRegEnvelope className="text-2xl" /> Contact Us
                    </button>
                  </div>
                </div>
                <button className="w-full py-3 bg-black rounded-3xl text-white text-center  text-xl font-bold">
                  GO TO DASHBOARD
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Navigation */}
        <div className="mt-8 pt-5">
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prev}
              disabled={currentStep === 0}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
