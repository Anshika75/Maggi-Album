import React from 'react'
import FireStore from '../hooks/FireStore';
export default function Container() {
    const { docs } = FireStore('images');
    console.log(docs);
  return (
    <div className='flex flex-row flex-wrap justify-center items-start mt-5'>
        {docs && docs.map(e => (
            <div className={
                  e.id % 2 == 0
                    ? "h-[250px] w-[200px] bg-[#EDEADE] p-[10px] pb-[30px] m-5 shadow-[0_4px_6px_rgba(0,0,0,.3)] transition-all hover:-rotate-6 duration-500"
                    : "h-[250px] w-[200px] bg-[#EDEADE] p-[10px] pb-[30px] m-5 shadow-[0_4px_6px_rgba(0,0,0,.3)] transition-all hover:rotate-6 duration-500"
                } key={e.id}>
                <img className='h-[200px] w-full transition-all hover:scale-110 duration-1000 cursor-pointer' src={e.url} alt='uploaded pic' />
                <div className="w-full bg-[#1D1D1D] rounded h-3 mt-3"></div>
            </div>
        ))}
    </div>
  )
}
