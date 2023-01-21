import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
    <>
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    </>
  )
}

export default Heading