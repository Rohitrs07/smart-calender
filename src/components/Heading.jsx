import React from 'react'

const Heading = ({text, color}) => {
    console.log(color)
  return (
    <h2 className={`text-2xl font-medium border-b-2 border-${color} max-w-max `}>
        <span className={`text-${color}`}>#</span> {text}
    </h2>
  )
}

export default Heading