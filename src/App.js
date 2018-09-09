import React from 'react'
import resetStyles from './resetStyles'
import Router from './router'

export default () => {
  resetStyles()
  return <Router />
}
