import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";
import {ref,getDownloadURL,uploadBytesResumable} from "firebase/storage";


export default function Storage(file,tag) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    useEffect(() => {
        const storageRef = ref(projectStorage,file.name);
        const collectionRef = projectFirestore.collection('images');
        const uploadTask = uploadBytesResumable(storageRef,file)
        uploadTask.on('state_changed', (e) => {
            let percentage = (e.bytesTransferred / e.totalBytes) * 100;
            setProgress(percentage);
        }
        , (err) => {    
            setError(err);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
                (url) => {
                    // const url = await storageRef.getDownloadURL();
    
                    collectionRef.add({ url, createdAt: timestamp(),tag});
                    setUrl(url);
                }
            );
        }
    )}, [file]);
    return { progress, url, error }
}
