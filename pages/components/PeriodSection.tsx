import React from 'react'
import GradientButton from './GradientButton'

function PeriodSection() {
  return (
    <section>
      <div className="bg-gradient-to-b from-[#F3B8BC] to-[#FFDAD4]">
        <h1 className="ml-[30px] mr-[100px] pt-[39px] text-[32px]">
          Track your period
        </h1>
        <h3 className="mt-[39px] ml-[33px] mr-[34px] mb-[33px] text-[14px]">
          Stay in the know with reliable AI-based and science-backed period,
          ovulation, and PMS predictions. The intuitive design makes tracking
          your cycle effortless and helps you stay on top of your monthly data.
        </h3>
        <div className="flex items-center justify-center">
          {/* <GradientButton
            text="Track you period on the app"
            from="#F66E6E"
            to="#F66E6E"
            key={3}
          /> */}
          <button
              type="button"
              className="rounded-full bg-period py-[18px] px-[39px] text-[19.86px]"
            >
              Track you period on the app
            </button>
        </div>
        <img className="mt-[47px]" src="period/menstrual-calender.png" alt="" />
      </div>
    </section>
  )
}

export default PeriodSection
