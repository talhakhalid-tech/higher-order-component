import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Chatbar from './Chatbar'
import Filemanager from './Filemanager'

class Main extends React.Component{
    render(){
        return(
            <div className="main-container">
            <Navbar/>
            <main>
                <div id="container">
                        <div className="row">
                        <Sidebar/>
                        <Filemanager/>
                        <Chatbar/>
                        </div>
                </div>
                </main>
            </div>
        )
    }
}

export default Main