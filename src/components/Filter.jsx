import React from 'react'
import style from './Filter.less'

export default ({ onChange }) => (
  <input placeholder="filter..." type="text" className={style.filter} onChange={onChange} />
)
