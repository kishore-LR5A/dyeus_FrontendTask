import React from 'react'

function PeriodBox() {
  return (
    <div className="bg-[#F66E6E]">
      <h1 className="ml-[33px] mr-[7px] pt-[39px] text-[32px] text-[#FFFFFFCC]">
        Get your personalized period box
      </h1>
      <img src="period/period-box.png" alt="" />
      <h3 className="ml-[33px] mr-[34px] mb-[40px] text-[14px] text-white">
        Tailor your monthly box of organic period products without the organic
        price tag (no pink taxing here). Get it delivered to your doorstep in
        sustainable packaging and track your subscription on our app.{' '}
      </h3>
      <div className="mx-[44px] flex items-center justify-center pb-[52px]">
        <button type="button">
          <div className="flex items-center justify-center space-x-[7.85px] rounded-full bg-black px-[26.91px] py-[7px]">
            <p className="text-[14px] text-white">
              Create your box on the app{' '}
            </p>
            <img src="period/chevron-right.svg" alt="" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default PeriodBox
