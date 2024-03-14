import React from 'react'

function Project({ projectName,text}) {
  return (
    <div className='project'>
      <img  alt="project image" />
      <h2>{projectName}</h2>
      <p>{text}</p>
      <button>View on GitHub</button>
    </div>
  )
}

export default Project