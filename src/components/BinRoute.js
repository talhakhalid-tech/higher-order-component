import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Chatbar from './Chatbar'
import Bin from './Bin'

class BinRoute extends React.Component{
    
    render(){
        return(
            <div className="main-container">
            <Navbar/>
            <main>
                <div id="container">
                        <div className="row">
                        <Sidebar active='bin'/>
                        <Bin/>
                        <Chatbar/>
                        </div>
                </div>
                </main>
            </div>
        )
    }
}

export default BinRoute