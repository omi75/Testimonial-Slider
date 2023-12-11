import React from 'react'
import Testimonial from './components/Testimonial'
import data from './data'
function App() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gray-200'>
      <div className='text-center'>
          <h1 className='text-4xl font-bold'>Our Cities</h1>
          <div className='bg-violet-400 h-[4px] w-1/5 mt-2 mx-auto'></div>
          <Testimonial data={data}/>
      </div>
    </div>
  )
}

export default App