import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className='container'>
        <h4 className='center'> About </h4>
        <p>This is About component</p>
    </div>
  )
}

export default Rainbow(About)