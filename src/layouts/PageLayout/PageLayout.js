import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Header from '../Header/Header'

export const PageLayout = ({ children }) => (
  <div>
    <Header />
    <div className='container my-2'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
