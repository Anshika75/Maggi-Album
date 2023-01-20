import React, { useState } from 'react'
import TagBox from './TagBox';

export default function Form() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg+xml', 'image/webp', 'image/bmp', 'image/tiff', 'image/x-icon'];
  const changeHandle = (e) => {  
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid image file.');
    }
    e.target.type ="text";
    e.target.type ="file";
    
  }
  return (
    <>
      <form className='text-center flex flex-col items-center justify-center'>
        <label className='flex items-center justify-center w-[30px] h-[30px] mt-7 bg-red-600 border cursor-pointer purple_grad_border'>
          <input className='absolute w-0 h-0 opacity-0' type="file" onChange={changeHandle} />
          <span className='purple_grad_txt grid place-items-center -mt-1 font-extrabold transition-all text-[20px]'>+</span>
        </label>
        <div className="output mt-3">
          {error && <div className="error trirong red_grad_txt opacity-90">{error}</div>}
          {file && <div className='white_grad_txt trirong font-light opacity-75'>{file.name}</div>}
          {file && <TagBox file={file} setFile={setFile}/>}
        </div>
      </form>
    </>
  )
}
