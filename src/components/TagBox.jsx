import React from 'react'
import Tags from './Tags'
import Progress from './Progress';
import { useState } from 'react';
export default function TagBox({file,setFile}) {
  const [tag, settag] = useState(null);
  return (
    <>
       {tag?<Progress file={file} setFile={setFile} tag={tag} settag={settag}/>:(<div className="absolute z-20 top-0 left-[50%] translate-x-[-50%] translate-y-[50%] h-[300px] w-[95%] md:w-[300px] flex flex-wrap border-2 purple_grad_border_bg bg-black p-1">
            <p className='lato font-normal white_grad_txt text-[18px] text-center m-2 opacity-80'>Please select a tag associated with your image</p>
            <Tags name="Nature" setTag={settag}/>
            <Tags name="Quote" setTag={settag}/>
            <Tags name="People" setTag={settag}/>
            <Tags name="Travel" setTag={settag}/>
            <Tags name="Animals" setTag={settag}/>
            <Tags name="Art" setTag={settag}/>
            <Tags name="Music" setTag={settag}/>
            <Tags name="Food" setTag={settag}/>
            <Tags name="Other" setTag={settag}/>
        </div>)}
    </>
  )
}
