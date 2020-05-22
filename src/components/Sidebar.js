import React from 'react'
import history from '../history'
import clipboards from '../resources/clipboards.svg'
import star from '../resources/star.svg'
import bin from '../resources/bin.svg'


class Sidebar extends React.Component{

    state={mainClass: 'nav-li',starredClass: 'nav-li',binClass: 'nav-li'}
    componentDidMount(){
        switch(this.props.active){
            case 'main':
                this.setState({mainClass:'active nav-li'})
                break;
            case 'starred':
                this.setState({starredClass:'active nav-li'})
                break;
            case 'bin':
                this.setState({binClass:'active nav-li'})
                break;
            default:
                break;
        }
    }
    onMeetingClick(){
        history.push('/')
    }
    onStarredClick(){
        history.push('/starred')
    }
    onBinClick(){
        history.push('/bin')
    }

    render(){
        return(
            <div className="col-xl-2 col-lg-2 col-md-2">
                        <div className="navbar">
                            <nav>
                                <ul>
                                    <li onClick={this.onMeetingClick} className={this.state.mainClass}>
                                            <img className="nav-li-icon" src={clipboards} alt=""/> 
                                            <p className="nav-li-p">My Meeting</p>
                                        </li>
                                    <li onClick={this.onStarredClick} className={this.state.starredClass}>
                                         <img  className="nav-li-icon" src={star} alt=""/>
                                         <p className="nav-li-p">Starred</p></li>
                                    <li onClick={this.onBinClick} className={this.state.binClass}>
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