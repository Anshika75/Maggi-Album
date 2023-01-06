// import React from 'react'
// import Storage from '../hooks/Storage'

// export default function Progress(file, setFile) {
//     const { progress, url } = Storage(file);
//     console.log(progress, url);
//   return (
//     <div>Progress</div>
//   )
// }
import React, { useEffect } from 'react';
import Storage from '../hooks/Storage';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = Storage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar h-[5px] purple_grad rounded-xl" style={{width: progress + '%'}}></div>
  );
} 

export default ProgressBar;
