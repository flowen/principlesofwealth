/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => {
  const state = {
    menuOpen: false,
    themeLight: false,
  }

  const newProps = {
    ...state,
    ...props,
  }

  // console.log(newProps)
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...newProps}>{element}</Layout>
}
