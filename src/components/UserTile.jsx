
import React from 'react'
import style from './UserTile.less'

const TechList = ({ className, title, list }) => (
  <div className={style.techList}>
    <h3 className='title'>{title}</h3>
    <ul className={style.skillList}>
      {list.map(tech =>
        <li key={tech} className={style.skill}>{tech}</li>
      )}
    </ul>
  </div>
)

export default ({user}) => (
  <div className={style.userTile}>
    <span className={style.username}><a href={user.url}>{user.username}</a></span>
    <TechList title='Seeking' list={user.mentorship.seeking} />
    <TechList title='Offering' list={user.mentorship.offering} />
  </div>
)
