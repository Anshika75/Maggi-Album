import React from 'react'
import FireStore from '../hooks/FireStore';
export default function Container() {
    const { docs } = FireStore('images');
    console.log(docs);
  return (
    <div className='img-grid'>
        {docs && docs.map(doc => (
            <div className='img-wrap' key={doc.id}>
                <img src={doc.url} alt='uploaded pic' />
                </div>
        ))}
    </div>
  )
}
