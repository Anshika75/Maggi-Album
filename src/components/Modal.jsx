import React from 'react'

export default function Modal({selectedImage}) {
    return (
        <>
            <div className="backdrop">
                <img src={selectedImage} alt="" />
            </div>
        </>
    )
}
