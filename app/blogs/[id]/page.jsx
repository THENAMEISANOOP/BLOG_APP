import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>Blog Page {params.id}</h1>
      console.log({params.id})
    </div>
  )
}

export default page
