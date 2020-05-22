import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Chatbar from './Chatbar'
import Starred from './Starred'

class StarredRoute extends React.Component{
    
    render(){
        return(
            <div className="main-container">
            <Navbar/>
            <main>
                <div id="container">
                        <div className="row">
                        <Sidebar active='starred'/>
                        <Starred/>
                        <Chatbar/>
                        </div>
                </div>
                </main>
            </div>
        )
    }
}

export default StarredRoute