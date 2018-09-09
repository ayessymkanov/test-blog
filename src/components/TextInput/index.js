import React from 'react'
import {Input} from './styles'

export default ({ type, placeholder, onChange, value }) => (
  <Input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
)