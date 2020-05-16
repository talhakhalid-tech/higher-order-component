import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'
import Chatbar from './Chatbar'
import '../styling/style.css'

function App() {
  return (
      <div className="main-container">
      <Navbar/>
      <main>
          <div id="container">
                <div class="row">
                  <Sidebar/>
                  <Main/>
                  <Chatbar/>
                </div>
          </div>
        </main>
      </div>

  );
}

export default App;
