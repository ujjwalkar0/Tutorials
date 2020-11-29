import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyApp from './MyApp'
import Html from './HTML/Html';
import Css from './CSS/Css';
import HTMLIndex from './HTML/Index'
import CssIndex from './CSS/Index'

function App(){
  return (
  <>
    <MyApp list={
    <main>
    <Switch>
      <Route path="/HTML"><HTMLIndex /></Route>
      <Route path="/CSS"><CssIndex /></Route>
    </Switch>
    </main>
    }
    content={
//       <main>
      <Switch>
        <Route path="/HTML"><Html/></Route>
        <Route path="/CSS"><Css/></Route>
      </Switch>
//       </main>

    }
    
    />
  </>);
}

export default App;
