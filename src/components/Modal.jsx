import React from 'react'

export default function Modal({ selectedImage, setSelectedImage }) {
    const handleClick = (e) => {
        if (e.target.classList.contains('close')) {
            setSelectedImage(null);
        }
    }
    return (
        <>
            <div className="close fixed flex justify-center items-center backdrop-blur-md top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.5)]" onClick={handleClick}>
                <img className='w-[60%] h-[60%] shadow-[3px_5px_7px_rgba(0,0,0,0.5)] border-[3px]' src={selectedImage} alt="" />
                <i className="close fa-solid fa-xmark absolute top-5 right-5 text-white opacity-75 cursor-pointer font-black transition-all hover:opacity-100"></i>
            </div>
        </>
    )
}
