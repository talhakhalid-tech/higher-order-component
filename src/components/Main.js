import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Chatbar from './Chatbar'
import Filemanager from './Filemanager'

class Main extends React.Component{

    state={term: ''}

    onChangeSearch=(term)=>{
        this.setState({term:term})
    }

    render(){
        return(
            <div className="main-container">
            <Navbar onSearch={this.onChangeSearch}/>
            <main>
                <div id="container">
                        <div className="row">
                        <Sidebar active='main'/>
                        <Filemanager search={this.state.term}/>
                        <Chatbar/>
                        </div>
                </div>
                </main>
            </div>
        )
    }
}

export default Main