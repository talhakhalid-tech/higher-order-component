import React from 'react'
import clipboards from '../resources/clipboards.svg'
import star from '../resources/star.svg'
import bin from '../resources/bin.svg'

class Sidebar extends React.Component{
    render(){
        return(
            <div className="col-xl-2 col-lg-2 col-md-2">
                        <div className="navbar">
                            <nav>
                                <ul>
                                    <li className="active nav-li">
                                            <img className="nav-li-icon" src={clipboards} alt=""/> 
                                            <p className="nav-li-p">My Meeting</p>
                                        </li>
                                    <li className="nav-li">
                                         <img  className="nav-li-icon" src={star} alt=""/>
                                         <p className="nav-li-p">Starred</p></li>
                                    <li className="nav-li">
                                         <img  className="nav-li-icon" src={bin} alt=""/>
                                         <p className="nav-li-p">Bin</p></li>
                                </ul>
                            </nav>
                        </div>
            </div>
        )
    }
}



export default Sidebar