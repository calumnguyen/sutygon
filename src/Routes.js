import React from 'react'
import {Switch, Redirect} from 'react-router-dom'
import {RouteWithLayout} from './components'

const Routes =()=> {

  return (
    <Switch>
      <Redirect exact from={"/"} to={""}/>
      <RouteWithLayout component={} exact path={""} />

    </Switch>
  )

}

export default Routes

