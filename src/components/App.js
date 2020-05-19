import React from 'react';
import {Router,Route,Switch} from 'react-router-dom'
import history from '../history.js'
import Main from './Main'
import SnippetRoute from './SnippetRoute'
import '../styling/style.css'

function App() {
  return (
      <div>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path='/' exact component={Main}/>
                        <Route path='/snippets' exact component={SnippetRoute}/>
                    </Switch>
                </div>
            </Router>
      </div>
  );
}

export default App;
