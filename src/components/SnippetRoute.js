import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Chatbar from './Chatbar'
import Snippets from './Snippets'

class SnippetRoute extends React.Component{
    
    render(){
        return(
            <div className="main-container" onClick={this.onScreenClick}>
            <Navbar/>
            <main>
                <div id="container">
                        <div className="row">
                        <Sidebar/>
                        <Snippets/>
                        <Chatbar/>
                        </div>
                </div>
                </main>
            </div>
        )
    }
}

export default SnippetRoute