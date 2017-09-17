
import React from 'react'
import style from './UserTile.less'

import { getProfileUrl } from '../users'

const getTitlePic = getProfileUrl(28)

const SkillList = ({ className, title, list }) => (
  <div>
    <h3 className={`title ${style.skillTitle}`}>{title}</h3>
    <ul className={style.skillList}>
      {list.map(tech =>
        <li key={tech} className={style.skill}>{tech}</li>
      )}
    </ul>
  </div>
)

export default ({user}) => (
  <div className={style.userTile}>
    <span className={style.username}>
      <a className={style.userLink} href={user.url}>
        <img className='profile-tiny' src={getTitlePic(user.username)} />
        {user.username}
      </a>
    </span>
    <SkillList title='Seeking' list={user.mentorship.seeking} />
    <SkillList title='Offering' list={user.mentorship.offering} />
  </div>
)
