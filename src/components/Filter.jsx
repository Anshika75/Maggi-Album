import React from 'react'
import Tags from './Tags'
export default function Filter({tag,settag}) {
  return (
    <>
      <div className="w-[95%] flex flex-wrap justify-center p-1">
        <Tags tag={tag} name="All" setTag={settag} />
        <Tags tag={tag} name="Nature" setTag={settag} />
        <Tags tag={tag} name="Quote" setTag={settag} />
        <Tags tag={tag} name="People" setTag={settag} />
        <Tags tag={tag} name="Travel" setTag={settag} />
        <Tags tag={tag} name="Animals" setTag={settag} />
        <Tags tag={tag} name="Art" setTag={settag} />
        <Tags tag={tag} name="Music" setTag={settag} />
        <Tags tag={tag} name="Food" setTag={settag} />
        <Tags tag={tag} name="Other" setTag={settag} />
      </div>
    </>
  )
}
