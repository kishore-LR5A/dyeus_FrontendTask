import React from 'react'

function Footer() {
  return (
    <footer className="flex flex-col justify-start space-y-[30px] bg-[#050506] py-[55px] px-[37px]">
      <div className="flex items-center justify-end space-x-[16px] text-[#E9F4FF]">
        <img className="h-[24px] w-[24px]" src="footer/facebook.svg" alt="" />
        <img className="h-[24px] w-[24px]" src="footer/twitter.svg" alt="" />
      </div>
      <div className="flex flex-col items-start justify-center text-[14px]">
        {['Products', 'Our Science', 'Vision & Mission', 'About Us'].map(
          (item, index) => (
            <div
              className="flex items-center justify-center space-x-[7px] text-white"
              key={index}
            >
              <h3 className="text-center text-[16px]">{item}</h3>
              <img src="period/chevron-right.svg" alt="" />
            </div>
          )
        )}
      </div>
      <hr className="mb-[17px] border-t-[2px] border-[#E3F4FF]" />
      <div className="space-y-[6px]">
        <p className="text-[8.95px] text-white">Subscribe to our Newsletter</p>
        <div className="flex space-x-[7px]">
          <div className="rounded-sm border-[1px] border-[#E7F6FC] bg-gray-400 pt-[3px] pb-[2px] pl-[11px] pr-[108px] text-[12px]">
            Enter your email..
          </div>
          <div className="flex items-center justify-center space-x-1 rounded-full bg-[#D6F4FB] py-[4.47px] px-[8px] text-[#1B1B50]">
            <img src="footer/mail.svg" alt="" />
            <p className="text-[8.95px] ">Activate</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
