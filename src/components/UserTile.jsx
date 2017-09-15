
import React from 'react'

const TechList = ({ className, name, list }) => (
  <div>
    <h3 className='title'>{name}</h3>
    <ul className={className}>
      {list.map(tech =>
        <li key={tech}>{tech}</li>
      )}
    </ul>
  </div>
)

export default ({user}) => (
  <div className='user'>
    <h2 className='name'><a href={user.url}>{user.username}</a></h2>
    <TechList className='seeking' name='Seeking' list={user.mentorship.seeking} />
    <TechList className='offering' name='Offering' list={user.mentorship.offering} />
  </div>
)
