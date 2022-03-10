import React from 'react'
import GradientButton from './GradientButton'

function LiberateSection() {
  return (
    <section className="relative h-[930px] bg-[#DCE9E9] pt-[39px]">
      <div>
        <h1 className=" mr-[7px] ml-[33px] text-[22px] font-bold  ">
          Liberate your everyday wellness
        </h1>
        <h1 className="mt-[37px] mr-[13px] ml-[33px] text-[32px]">
          Shop our self-care products
        </h1>
        <p className="mt-[21px] ml-[33px] mr-[34px] mb-[17px]">
          Gentle formulations thoughtfully engineered by specialist researchers
          and doctors to simplify your self-care and get results fast. And, we
          always list our ingredients - so what you see is what you get.
        </p>
      </div>
      <div className="absolute bottom-[0px]">
        <div className="relative flex items-center justify-center ">
          <div className="absolute top-[51px] ">
            {/* <GradientButton
              text="Upgrade your self-care"
              from="#F66E6E"
              to="#f66e6e00"
              key={1}
            /> */}
            <button
              type="button"
              className="rounded-full bg-liberate py-[18px] px-[39px] text-[19.86px]"
            >
              Upgrade your self-care
            </button>
            <h2 className="mt-[21px] flex items-center justify-center text-[22px]">
              #NoNasties, we promise!
            </h2>
          </div>
        </div>
        <img src="pexels-karolina-grabowska-4041391.png" alt="" />
      </div>
    </section>
  )
}
export default LiberateSection
