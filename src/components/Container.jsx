import React from 'react'
import FireStore from '../hooks/FireStore';
import { motion } from 'framer-motion';

export default function Container({setSelectedImage}) {
    const { docs } = FireStore('images');
    console.log(docs);
  return (
    <div className='grid grid-cols-1 justify-items-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-[90%]'>
        {docs && docs.map((e,i) => (
            <motion.div className={
                  i % 2 == 0
                    ? "opacity-75 h-[250px] w-[200px] bg-[#EDEADE] p-[10px] pb-[30px] m-5 shadow-[0_4px_6px_rgba(0,0,0,.3)] transition-all hover:-rotate-6 duration-500"
                    : "opacity-75 h-[250px] w-[200px] bg-[#EDEADE] p-[10px] pb-[30px] m-5 shadow-[0_4px_6px_rgba(0,0,0,.3)] transition-all hover:rotate-6 duration-500"
                } key={i}
                  layout
                  transition={{ duration: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  onClick={() => setSelectedImage(e.url)}
                >
                <img className='layout h-[200px] w-full transition-all hover:scale-110 duration-1000 cursor-pointer' src={e.url} alt='uploaded pic' />
                <div className="w-full bg-[#1D1D1D] rounded h-3 mt-3"></div>
            </motion.div>
        ))}
    </div>
  )
}
