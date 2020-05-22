import React from 'react';
import {Router,Route,Switch} from 'react-router-dom'
import history from '../history.js'
import Main from './Main'
import SnippetRoute from './SnippetRoute'
import StarredRoute from './StarredRoute'
import BinRoute from './BinRoute'
import '../styling/style.css'

function App() {
  return (
      <div>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path='/' exact component={Main}/>
                        <Route path='/snippets' exact component={SnippetRoute}/>
                        <Route path='/starred' exact component={StarredRoute}/>
                        <Route path='/bin' exact component={BinRoute}/>
                    </Switch>
                </div>
            </Router>
      </div>
  );
}

export default App;
