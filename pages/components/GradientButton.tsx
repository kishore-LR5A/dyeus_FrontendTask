import React from 'react'

interface Props {
  text: string
  from: string
  to: string
}
//
function GradientButton(props: Props) {
  // const buttonStyles = `rounded-full bg-gradient-to-tl from-[${props.from}] to-[${props.to}] py-[18px] px-[39px] text-[19.86px]`
  return (
    <button
      type="button"
      className={`rounded-full bg-gradient-to-tl from-[#${props.from}] to-[#${props.to}] py-[18px] px-[39px] text-[19.86px]`}
    >
      {props.text}
    </button>
  )
}

export default GradientButton

