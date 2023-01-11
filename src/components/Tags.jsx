import React from 'react'

export default function Tags(props) {
  return (
    <>
        <div className="grid place-items-center purple_grad_border px-2 border-2 h-[45px] cursor-pointer m-3 opacity-80">
            <p className='purple_grad_txt font-medium transition-all text-[16px]'>{props.name}</p>
        </div>
    </>
  )
}
