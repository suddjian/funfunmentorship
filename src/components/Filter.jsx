import React from 'react'
import style from './Filter.less'

export default ({ onChange }) => (
  <input placeholder="Filter skills and find a friend!" type="text" className={style.filter} onChange={onChange} />
)
