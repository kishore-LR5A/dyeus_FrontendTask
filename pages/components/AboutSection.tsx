import React from 'react'

function AboutSection() {
  return (
    <section>
      <div className="mt-[43px] flex flex-col items-center justify-center space-y-[37px] px-[33px] ">
        <h1 className="text-[33px]">About Diana</h1>
        <h2 className="text-[18px]">A platform that looks out for you</h2>
        <h3 className="text-[14px]">
          Diana empowers you to understand how your body works so you can look
          and feel your best.{' '}
        </h3>
      </div>
      {/* horizontal line */}
      <hr className="mt-[26px] ml-[46px] mr-[32px] border-t-[1px] border-black" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-[32px] text-[22px] font-bold">Our Philosophy</h1>
        <h1 className="mt-[37px] mr-[37px] ml-[35px] text-center text-[30px]">
          Sustainable wellness is a big-picture, inside out approach
        </h1>
      </div>
      <div className="mx-[34px] mt-[37px] flex flex-col space-y-[45px] text-center font-semibold">
        <h3>
          Diana is on a mission to create thoughtful, science-backed solutions
          for women who want to make informed decisions about their health and
          wellness.{' '}
        </h3>

        <h3>That’s why we’ve created an integrated ecosystem of:</h3>
      </div>
      {/* ecosystem cards follows */}
      {[
        [
          'about/test.svg',
          'Consciously formulated products that deliver feel-good results fast',
        ],
        [
          'about/stars.svg',
          'In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body',
        ],
        [
          'about/phone-call.svg',
          'In-app consultation portals that connect you with compassionate wellness experts',
        ],
      ].map((item, index) => (
        <div
          className="mt-[37px] mb-[37px] mr-[34px] ml-[32px] flex flex-col items-center justify-center space-y-[45px]"
          key={index}
        >
          <img src={item[0]} className="h-[70px] w-[70px]" alt="" />
          <h3 className="text-center text-[16px]">{item[1]}</h3>
        </div>
      ))}

      <h3 className="mt-[66px] mr-[34px] ml-[33px] mb-[45px] text-center text-[16px]">
        Consider us your nerdy ally who spends their time perfecting products
        that work because they want you to feel your best everyday.
      </h3>
    </section>
  )
}

export default AboutSection
