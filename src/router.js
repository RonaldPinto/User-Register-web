import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom';
import StartSession from './Components/StartSession/StartSession'
import './General/General.scss'

const Router = () => (
    <div>
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path="/" component={StartSession}/>
      </Switch>
    </HashRouter>
  </div>
)

export default Router;