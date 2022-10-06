import React, { Fragment } from 'react'

import {
  Header
} from '../../containers/index'

import {
  Route,
  HashRouter,
  NavLink
} from 'react-router-dom'

const Root = () => {
  return (
    <Fragment>
      <Header />
      <HashRouter>
        <Route exact path="/" component={() => <Home />} />
      </HashRouter>
    </Fragment>
  )
}

export default NavLink(Root)
