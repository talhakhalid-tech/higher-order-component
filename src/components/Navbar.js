import React from 'react'
import logo from '../resources/logo.png'
import storage from '../resources/storage.svg'
import user from '../resources/user.svg'

class Navbar extends React.Component{


    onValueChange=(event)=>{
        this.props.onSearch(event.target.value)
    }

    render(){
        return(
                <header>
                    <div id="container" className="row">
                        <div id="header-container" className="col-xl-12 col-lg-12 col-md-12">
                            <div className="col-xl-2 col-lg-2 col-md-2 branding">
                                <img className="logo" src={logo} alt=""/>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="search">
                                    <input className="search-bar" onChange={this.onValueChange} type="text" name="search" placeholder="Search records..." autoComplete='off'/>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-2">
                                <div className="data-storage">
                                    <img className="data-storage-img" src={storage} alt=""/> 
                                    <p className="data-storage-tag">2.2 GB of 15 GB used</p>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-2">
                                <div className="profile">
                                    <img className="profile-img" src={user} alt=""/> 
                                    <p className="profile-tag">Muhammad Maavia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        )
    }
}

export default Navbar