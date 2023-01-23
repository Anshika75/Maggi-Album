import React, {useState} from 'react'
export default function Tags({setTag,name,tag}) {
  
  return (
    <>{
      <div onClick={()=>setTag(name)} className={`grid place-items-center px-2 h-[45px] cursor-pointer m-3 opacity-80 ${tag == name ? "purple_grad_border_hover" : "purple_grad_border  border-2 " } `}>
            <p className={`font-medium transition-all text-[16px] ${tag == name ? "purple_grad_txt_hover" : "purple_grad_txt"} `}>{name}</p>
        </div>
    }   
    </>
  )
}
