'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Organization from '../public/images/organization.png'
import Individual from '../public/images/individual.png'
import { z } from 'zod'
import { FormDataSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import Image from 'next/image'

type Inputs = z.infer<typeof FormDataSchema>

const steps = [
  {
    id: 'Step 1',
    name: 'Personal Information',
    fields: ['firstName', 'lastName', 'email']
  },
  {
    id: 'Step 2',
    name: 'Address',
    fields: ['country', 'state', 'city', 'street', 'zip']
  },
  { id: 'Step 3', name: 'Complete' }
]

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const delta = currentStep - previousStep

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema)
  })

  const processForm: SubmitHandler<Inputs> = data => {
    console.log(data)
    reset()
  }

  type FieldName = keyof Inputs

  const next = async () => {
    const fields = steps[currentStep].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
      }
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }

  return (
    <section>
      {/* steps */}
      <nav aria-label='Progress'>
        <div className='w-full  bg-[#F5F5F5] flex items-center justify-between mb-6 p-10'>
          <div>
            <div className='text-xs font-medium text-yellow-700 bg-yellow-100 rounded px-2 py-1 w-max mb-2'>
              About 5 minutes to complete
            </div>
            <h1 className='text-xl font-bold text-gray-900'>START YOUR EVERYGRIND FUNDRAISER</h1>
            <p className='text-sm text-gray-600'>Set up in minutes. Earn 60% on every sale.</p>
          </div>

          <div className='flex flex-col items-center space-y-4'>
            <button
              type='button'
              className='border border-gray-300 text-gray-700 text-sm px-4 py-1.5 rounded-md hover:bg-gray-100 transition'
            >
              Save & Continue Later
            </button>
            <div className='w-40'>
              <div className='h-2 rounded-full bg-gray-200'>
                <div
                  className='h-2 rounded-full bg-sky-600 transition-all duration-300'
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
              </div>
              <div className='text-xs text-gray-500 mt-1'>
                Step {currentStep + 1} of {steps.length} – {steps[currentStep].name}
              </div>
            </div>


          </div>
        </div>

      </nav>
      <div className='absolute inset-0 flex flex-col justify-between p-24'>
        {/* Form */}
        <form className='mt-12 py-12' onSubmit={handleSubmit(processForm)}>
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h2 className='text-base font-semibold leading-7 text-gray-900 text-center'>
                WHO'S RAISING FUNDS?
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600 text-center'>Tell us who you're fundraising for so we can set up the perfect campaign.</p>

              <div className='mt-10 flex flex-col gap-y-5 justify-center max-w-2/3 mx-auto'>
                <div className='mb-3 border border-gray-500 p-10 rounded-lg'>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Fundraiser Name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      placeholder='e.g., Lincoln Dragons Basketball Equipment Fund'
                      id='firstName'
                      {...register('firstName')}
                      autoComplete='given-name'
                      className='block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    />
                    {errors.firstName?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between py-3">
                    <p>Be specific to engage your supporters</p>
                    <p>70 characters remaining</p>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <div className="flex justify-between">
                    <div className="border border-gray-500 p-10 rounded-lg ">
                      <div className="flex flex-col">
                        <div className="flex justify-between p-4">
                          <Image src={Organization} alt="Organization" />
                          <h1>Organization</h1>
                        </div>
                        <p>Team, school, nonprofit, etc.</p>
                      </div>
                    </div>
                    <div className="border border-gray-500 p-10 rounded-lg ">
                      <div className="flex flex-col">
                        <div className="flex justify-between p-4">
                          <Image src={Individual} alt="Individual" />
                          <h1>Individual</h1>
                        </div>
                        <p>For personal causes or projects</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 border border-gray-500 p-10 rounded-lg">
                  <h1 className='text-2xl text-bold uppercase py-2'>Organization Details</h1>
                  <div className='mb-3'>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Organization Name
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        placeholder='e.g., Lincoln High Dragons'
                        id='orgName'
                        autoComplete='given-name'
                        className='block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                      />
                      {/* {errors.orgName?.message && (
                    <p className='mt-2 text-sm text-red-400'>
                      {errors.orgName.message}
                    </p>
                  )} */}
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Organization Type
                    </label>
                    <div className='mt-2'>
                      <select
                        id='orgType'
                        autoComplete='orgType'
                        className='block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
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
                  <h1 className='text-2xl font-bold py-2 uppercase'>Personal Details</h1>
                  <p className='pb-2'>This person will be the main point of contact for your fundraiser.</p>
                  <div className='mb-3'>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      First Name
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        id='firstName'
                        {...register('firstName')}
                        autoComplete='given-name'
                        className='block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                      />
                      {errors.firstName?.message && (
                        <p className='mt-2 text-sm text-red-400'>
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='LastName'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Last Name
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        id='lastName'
                        {...register('lastName')}
                        autoComplete='given-name'
                        className='block w-full px-4 rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                      />
                      {errors.lastName?.message && (
                        <p className='mt-2 text-sm text-red-400'>
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        id='email'
                        type='email'
                        {...register('email')}
                        autoComplete='email'
                        className='block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                      />
                      {errors.email?.message && (
                        <p className='mt-2 text-sm text-red-400'>
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Phone Number
                    </label>
                    <div className='mt-2'>
                      <input
                        id='phone'
                        type='phone'
                        // {...register('phone')}
                        autoComplete='phone'
                        className='block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                      />
                      { {errors.phone?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.phone.message}
                      </p>
                    )} }
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='role'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Position/Role
                    </label>
                    <div className='mt-2'>
                      <input
                        id='role'
                        type='role'
                        placeholder='e.g., Coach, Team Director, PTA President'
                        // {...register('role')}
                        autoComplete='role'
                        className='block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
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
                  <div className="flex">
                    <span className='bg-yellow-300 py-1 px-2 rounded-full mr-3'>+</span>
                    <h1 className='text-2xl font-bold uppercase'>ADD BACKUP CONTACT (RECOMMENDED)</h1>
                  </div>
                  <p>Adding a second contact ensures your team always has access to the fundraiser.</p>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Address
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                Address where you can receive mail.
              </p>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Country
                  </label>
                  <div className='mt-2'>
                    <select
                      id='country'
                      {...register('country')}
                      autoComplete='country-name'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6'
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    {errors.country?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='street'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Street address
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      id='street'
                      {...register('street')}
                      autoComplete='street-address'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    />
                    {errors.street?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.street.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className='sm:col-span-2 sm:col-start-1'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    City
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      id='city'
                      {...register('city')}
                      autoComplete='address-level2'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    />
                    {errors.city?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='state'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    State / Province
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      id='state'
                      {...register('state')}
                      autoComplete='address-level1'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    />
                    {errors.state?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.state.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='zip'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    ZIP / Postal code
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      id='zip'
                      {...register('zip')}
                      autoComplete='postal-code'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    />
                    {errors.zip?.message && (
                      <p className='mt-2 text-sm text-red-400'>
                        {errors.zip.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Complete
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                Thank you for your submission.
              </p>
            </>
          )}
        </form>

        {/* Navigation */}
        <div className='mt-8 pt-5'>
          <div className='flex justify-between'>
            <button
              type='button'
              onClick={prev}
              disabled={currentStep === 0}
              className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </button>
            <button
              type='button'
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}
