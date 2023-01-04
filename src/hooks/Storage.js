import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";


export default function Storage(file) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on('state_changed', (e) => {
            let percentage = (e.bytesTransferred / e.totalBytes) * 100;
            setProgress(percentage);
        }), (err) => { m    
            setError(err);
        }, async () => {
            const imgurl = await storageRef.getDownloadURL();
            setUrl(imgurl);
        }
    }, [file]);
    return { progress, url, error }
}


