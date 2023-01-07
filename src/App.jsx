import React from 'react'
import Container from './components/Container'
import Form from './components/Form'
import Head from './components/Head'
import Title from './components/Title'

export default function App() {
  return (
    <>
      <div className='relative min-h-screen h-full w-full bg flex flex-col items-center pt-16'>
        <Head/>
        <Title/>
        <Form/>
        <Container/>
      </div>
    </>
  )
}
