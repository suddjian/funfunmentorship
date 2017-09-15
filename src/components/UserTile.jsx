
import React from 'react'

const TechList = ({ className, name, list }) => (
  <div>
    <h2 className='title'>{name}</h2>
    <ul className={className}>
      {list.map(tech =>
        <span key={tech}>{tech}</span>
      )}
    </ul>
  </div>
)

export default ({user}) => (
  <div className='user'>
    <span className='name'>{user.username}</span>
    <TechList className='seeking' name='Seeking' list={user.mentorship.seeking} />
    <TechList className='offering' name='Offering' list={user.mentorship.offering} />
  </div>
)
