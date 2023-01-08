import React from 'react'
import FireStore from '../hooks/FireStore';
export default function Container() {
    const { docs } = FireStore('images');
    console.log(docs);
  return (
    <div className='flex flex-row flex-wrap justify-center items-start '>
        {docs && docs.map(e => (
            <div className='h-[250px] w-[250px] border border-white m-2' key={e.id}>
                <img className='h-full w-full' src={e.url} alt='uploaded pic' />
                </div>
        ))}
    </div>
  )
}
