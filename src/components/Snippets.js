import React from 'react'
import downloadBlack from '../resources/download-black.svg'
import shareBlack from '../resources/share-black.svg'
import binBlack from '../resources/bin-black.svg'
import soundWaves from '../resources/sound-waves.svg'
import starGrey from '../resources/star-grey.svg'
import binGrey from "../resources/bin-grey.svg"
import moreGrey from "../resources/more-grey.svg"
import edit from "../resources/edit.svg"
import share from "../resources/share.svg"
import download from "../resources/download.svg"
import play from "../resources/play.svg"


class Snippets extends React.Component{

    constructor(props){
        super(props)
        this.myDIVRef = React.createRef()
        this.myDropdownRef = []
        for(let i=1;i<=6;i++){
            this.myDropdownRef[i] = React.createRef()
        }
        this.count = 0
        this.state={dropdown: false}
    }

    onClickCheckbox = (event) =>{
        if(event.target.checked){
            this.count++
        } else{
            this.count--
        }
        if(this.count){
            this.myDIVRef.current.style.display = 'block'
        } else{
            this.myDIVRef.current.style.display = 'none'
        }
    }

    onClickDropdown = (i) =>{
       this.myDropdownRef[i].current.classList.toggle('show')
    }

    onScreenClick=(event)=>{
        if(!event.target.matches('.dropbtn')){
        let dropdowns = document.getElementsByClassName("dropdown-content")
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
    }

    renderSnippets(){
        let snippets=[]
        for(let i=1;i<=6;i++){
            snippets.push(
            <div key={i} className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 flex">
                    <ul className="flex">
                        <li className="snippet"><label className="container-checkbox">
                            <input type="checkbox" onClick={this.onClickCheckbox}/>
                            <span className="checkmark"></span>
                        </label>
                        </li>
                        <li className="snippet-name">Snippet {i} &nbsp; 1:23pm <br/> <span className="date">0:02:01</span></li>
                    </ul>
                </div>
                
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <ul>
                        <li>
                            <img className="snippet-img" src={soundWaves} alt=""/>
                        </li>
                    </ul>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                    <ul className="flex right">
                        <li className="nav-li-snippet">
                            <img className="nav-li-icon-snippet" src={starGrey} alt=""/>
                        </li>
                        <li className="nav-li-snippet">
                            <img className="nav-li-icon-snippet" src={binGrey} alt=""/>
                        </li>
                        <li className="nav-li-snippet dropdown">
                            <img className="nav-li-icon-snippet dropbtn" onClick={this.onClickDropdown.bind(this,i)} src={moreGrey} alt=""/>
                                <div ref={this.myDropdownRef[i]} id="myDropdown" className="dropdown-content">
                                <a href="/snippets"> <img className="nav-li-icon-snippet-dropdown" src={edit} alt="edit icon"/> &nbsp; Rename</a>
                                <a href="/snippets"> <img className="nav-li-icon-snippet-dropdown" src={share} alt="share icon"/> &nbsp; Share</a>
                                <a href="/snippets"> <img className="nav-li-icon-snippet-dropdown" src={download} alt="download icon"/> &nbsp; Download</a>
                                </div>
                        </li>
                        <li className="">
                            <img className="nav-li-icon-snippet-play" src={play} alt="play icon"/>
                        </li>
                    </ul>
                </div>

        </div>)
        snippets.push(<br key={i+6}/>)
        }
        return snippets
    }

    render(){
        return(
            <div className="col-xl-8 col-lg-8 col-md-8" onClick={this.onScreenClick}>
                        <div className="Section">
                            <div className="section-top">
                                <div className="div-50 left flex">
                                    <p className="heading">My Meetings &nbsp; <img  className="breadcrumbs-icon" src="./resources/next.svg" alt=""/> &nbsp; <span className="breadcrumbs-text">Meeting with team</span></p>
                                </div>
                                <div ref={this.myDIVRef} id="myDIV" className="div-50 right">
                                    <img className="nav-li-icon-snippet" alt="" src={downloadBlack}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <img className="nav-li-icon-snippet" alt="" src={shareBlack}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <img className="nav-li-icon-snippet" alt="" src={binBlack}/>
                                </div>
                            </div>
                            
                            <hr className="hr-line"/>
                            <div className="section-main">
                                <div className="card-snippet">
                                    {this.renderSnippets()}
                                </div>
                            </div>
                        </div>
                    </div>

        )
    }
}

export default Snippets