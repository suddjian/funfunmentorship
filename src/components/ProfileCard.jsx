import React from 'react'
import style from './ProfileCard.less'
import Geopin from './Geopin'

import { getProfileUrl } from '../users'

const getTitlePic = getProfileUrl(160) // making it crisp for them retina screens

const Location = ({user}) => {
  if (user.location) {
    return (
      <a className={style.location} href="https://vazerthon.github.io/funfunforum-usermap/">
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
    return <span className={style.caption}>{user.location.caption}</span>
  } else {
    return null
  }
}

export default ({user}) => (
  <section className={style.profileCard}>
    <span>
      <a className={style.link} href={user.url}>
        <img className={style.image} src={getTitlePic(user.username)} />
        <span className={style.name}>{user.username}</span>
      </a>
      <Location user={user} />
      <Caption user={user} />
    </span>
  </section>
)