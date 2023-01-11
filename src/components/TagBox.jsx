import React from 'react'
import Tags from './Tags'

export default function TagBox() {
  return (
    <>
        <div className="absolute z-20 top-0 left-[50%] translate-x-[-50%] translate-y-[50%] h-[300px] w-[95%] md:w-[300px] flex flex-wrap border-2 purple_grad_border_bg bg-black p-1">
            <p className='lato font-normal white_grad_txt text-[18px] text-center m-2 opacity-80'>Please select a tag associated with your image</p>
            <Tags name="Nature"/>
            <Tags name="Quote"/>
            <Tags name="People"/>
            <Tags name="Travel"/>
            <Tags name="Animals"/>
            <Tags name="Art"/>
            <Tags name="Music"/>
            <Tags name="Food"/>
            <Tags name="Other"/>
        </div>
    </>
  )
}
