import React, {useState} from 'react'
import Container from './components/Container'
import Filter from './components/Filter'
import Form from './components/Form'
import Head from './components/Head'
import Modal from './components/Modal'
import Title from './components/Title'

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [tag, settag] = useState("All");
  return (
    <>
      <div className='relative min-h-screen h-full w-full bg flex flex-col items-center pt-16'>
        <Head/>
        <Title/>
        <Form/>
        <Filter settag={settag} tag={tag}/>
        <Container setSelectedImage={setSelectedImage} tag={tag}/>
        { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
      </div>
    </>
  )
}
