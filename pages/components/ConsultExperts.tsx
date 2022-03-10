import React from 'react'
import GradientButton from './GradientButton'

function ConsultExperts() {
  return (
    <section>
      <div className="bg-gradient-to-b from-[#F3B8BC] to-[#FFDAD4]">
        <h1 className="ml-[30px] mr-[100px] pt-[39px] text-[32px]">
          Consult with wellness experts
        </h1>
        <h3 className="mt-[39px] ml-[33px] mr-[34px] mb-[33px] text-[14px]">
          Set up health consultations with experienced doctors and therapists on
          our app. Simply select a service, answer a few questions, and we’ll
          connect you to someone who is the right-fit for you.
        </h3>
        <div className="flex items-center justify-center text-black">
          {/* <GradientButton
            text="Get a consultation"
            from="#F66E6E"
            to="#F66E6E"
            key={3}
          /> */}
          <button
              type="button"
              className="rounded-full bg-consult py-[18px] px-[39px] text-[19.86px]"
            >
              Get a consultation
            </button>
        </div>
        <img className="mt-[47px]" src="consultExperts/doctor.png" alt="" />
      </div>
    </section>
  )
}

export default ConsultExperts
