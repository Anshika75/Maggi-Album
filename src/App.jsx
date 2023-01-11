import React, {useState} from 'react'
import Container from './components/Container'
import Form from './components/Form'
import Head from './components/Head'
import Modal from './components/Modal'
import TagBox from './components/TagBox'
import Title from './components/Title'

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <div className='relative min-h-screen h-full w-full bg flex flex-col items-center pt-16'>
        <Head/>
        <Title/>
        <Form/>
        { selectedImage && <TagBox/>}
        {/* <TagBox/> */}
        <Container setSelectedImage={setSelectedImage}/>
        { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
      </div>
    </>
  )
}
