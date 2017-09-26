
import React from 'react'
import style from './UserTile.less'
import classNames from 'classnames'
import Geopin from './Geopin'

import { getProfileUrl } from '../users'

const getTitlePic = getProfileUrl(160) // making it crisp for them retina screens

const SkillList = ({ className, title, list }) => (
  <div className={style.skillsCategory}>
    <h3 className={`title ${style.skillsCategoryTitle}`}>{title}</h3>
    <ul className={style.skills}>
      {list.map(tech =>
        <li key={tech} className={[`skill skill-${title}`]}>{tech}</li>
      )}
    </ul>
  </div>
)

const Location = ({user}) => {
  if (user.location) {
    return (
      <a className={style.userLocation}>
        <Geopin />
        {user.location.lat}, {user.location.lng}
      </a>
    )
  } else {
    return null
  }
}

const Caption = ({user}) => {
  if (user.location) {
    return <span className={style.userCaption}>{user.location.caption}</span>
  } else {
    return null
  }
}

export default ({user}) => (
  <article className={style.userTile}>
    <section className={style.userInfo}>
      <span className={style.username}>
        <a className={style.userLink} href={user.url}>
          <img className='profile-tiny' src={getTitlePic(user.username)} />
          <span className={style.userName}>{user.username}</span>
        </a>
        <Location user={user} />
        <Caption user={user} />
      </span>
    </section>
    <section className={style.skillArea}>
      <SkillList title='Seeking' list={user.mentorship.seeking} />
      <SkillList title='Offering' list={user.mentorship.offering} />
    </section>
  </article>
)
