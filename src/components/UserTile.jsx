
import React from 'react'
import style from './UserTile.less'
import Geopin from './Geopin'
import ProfileCard from './ProfileCard'


const SkillList = ({ className, title, list }) => (
  <div className={style.skillsCategory}>
    <h3 className={`title ${style.skillsCategoryTitle}`}>{title}</h3>
    <ul className={style.skills}>
      {list.map(tech =>
        <li key={tech} className={[style.skill, style[title]].join(' ')}>{tech}</li>
      )}
    </ul>
  </div>
)

export default ({user}) => (
  <article className={style.userTile}>
    <ProfileCard user={user} />
    <section className={style.skillArea}>
      <SkillList title='Seeking' list={user.mentorship.seeking} />
      <SkillList title='Offering' list={user.mentorship.offering} />
    </section>
  </article>
)
