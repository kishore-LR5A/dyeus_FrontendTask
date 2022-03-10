import React from 'react'
import GradientButton from './GradientButton'

function MoodSection() {
  return (
    <section>
      <div className="bg-gradient-to-b from-[#FFF6FB] to-[#FFFFFF]">
        <h1 className="ml-[30px] mr-[100px] pt-[39px] text-[32px]">
          Track your mood
        </h1>
        <h3 className="mt-[39px] ml-[33px] mr-[34px] mb-[33px] text-[14px]">
          All days and all moods are not made equal. But we can only improve
          what we measure. Track your mood and vitals (including skin and hair
          health) so you can take better care of yourself every day.
        </h3>
        <div className="flex items-center justify-center">
          {/* <GradientButton
            text="Track you mood on the app"
            from="#6E8CF6"
            to="#6ED5F6"
          /> */}
          <button
              type="button"
              className="rounded-full bg-mood py-[18px] px-[39px] text-[19.86px]"
            >
              Track you mood on the app
            </button>
        </div>
        <div className="mx-[11px] mt-[33px] pb-[37px] grid grid-cols-2 gap-[25px]">
          <img src="mood/w1.png" alt="" />
          <img src="mood/w2.png" alt="" />
          <img src="mood/w3.png" alt="" />
          <img src="mood/w4.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default MoodSection
