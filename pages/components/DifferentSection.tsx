import React from 'react'

function DifferentSection() {
  return (
    <section className="bg-different h-auto pt-[39px] text-left">
      <h1 className="mr-[46px] ml-[34px] text-[22px] font-bold ">
        What makes us different?
      </h1>
      <h1 className="mt-[37px] mr-[6px] ml-[34px] text-[32px] ">
        Reimagining and rewiring self-care
      </h1>
      <div className="pt-[29px] pl-[34px] pr-[33px] pb-[42px] flex flex-col space-y-[40px]">
        <p>You care about conscious consumption, and so do we. </p>
        <p>
          When it comes to your health, “good enough” is not good enough. We’re
          here to flip the script on that narrative because you deserve the best{' '}
        </p>
        <p>We collaborate with researchers and doctors to </p>
        <ul className='list-disc px-4'>
          <li>
            Help you get granular about your health and self-care with
            personalized insights, and
          </li>
          <li>
            Equip you with simple, sustainable products that get the job done
          </li>
        </ul>
        <p>No to-the-moon-and-back claims in this neck of the woods.</p>
        <p>We’re just solving real problems for real people here. </p>
      </div>
    </section>
  )
}

export default DifferentSection
