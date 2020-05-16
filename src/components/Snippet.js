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


class Snippet extends React.Component{
    render(){
        return(
            <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="Section">
                            <div className="section-top">
                                <div className="div-50 left flex">
                                    <p className="heading">My Meetings &nbsp; <img  className="breadcrumbs-icon" src="./resources/next.svg" alt=""/> &nbsp; <span className="breadcrumbs-text">Meeting with team</span></p>
                                </div>
                                <div id="myDIV" className="div-50 right">
                                    <img className="nav-li-icon-snippet" src={downloadBlack}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <img className="nav-li-icon-snippet" src={shareBlack}/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <img className="nav-li-icon-snippet" src={binBlack}/>
                                </div>
                            </div>
                            
                            <hr className="hr-line"/>
    
                            <div className="section-main">
                                <div className="card-snippet">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-3 flex">
                                            <ul className="flex">
                                                <li className="snippet"><label className="container-checkbox">
                                                    <input type="checkbox" onclick="myFunctionCheckbox()"/>
                                                    {/* <!-- <input type="checkbox" checked="checked"> --> */}
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </li>
                                                <li className="snippet-name">Snippet 01 &nbsp; 1:23pm <br/> <span className="date">0:02:01</span></li>
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
                                                    <img className="nav-li-icon-snippet dropbtn" onclick="myFunction()" src={moreGrey} alt=""/>
                                                        <div id="myDropdown" className="dropdown-content">
                                                          <a href="#"> <img className="nav-li-icon-snippet-dropdown" src={edit} alt=""/> &nbsp; Rename</a>
                                                          <a href="#"> <img className="nav-li-icon-snippet-dropdown" src={share} alt=""/> &nbsp; Share</a>
                                                          <a href="#"> <img className="nav-li-icon-snippet-dropdown" src={download} alt=""/> &nbsp; Download</a>
                                                        </div>
                                                </li>
                                                <li className="">
                                                    <img className="nav-li-icon-snippet-play" src={play} alt=""/>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-3 flex">
                                            <ul className="flex">
                                                <li className="snippet"><label className="container-checkbox">
                                                    <input type="checkbox"/>
                                                    {/* <!-- <input type="checkbox" checked="checked"> --> */}
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </li>
                                                <li className="snippet-name">Snippet 01 &nbsp; 1:23pm <br/> <span className="date">0:02:01</span></li>
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
                                                <li className="nav-li-snippet">
                                                    <img className="nav-li-icon-snippet" src={moreGrey} alt=""/>
                                                </li>
                                                <li className="">
                                                    <img className="nav-li-icon-snippet-play" src={play} alt=""/>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-3 flex">
                                            <ul className="flex">
                                                <li className="snippet"><label className="container-checkbox">
                                                    <input type="checkbox"/>
                                                    {/* <!-- <input type="checkbox" checked="checked"> --> */}
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </li>
                                                <li className="snippet-name">Snippet 01 &nbsp; 1:23pm <br/> <span className="date">0:02:01</span></li>
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
                                                <li className="nav-li-snippet">
                                                    <img className="nav-li-icon-snippet" src={moreGrey} alt=""/>
                                                </li>
                                                <li className="">
                                                    <img className="nav-li-icon-snippet-play" src={play} alt=""/>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-3 flex">
                                            <ul className="flex">
                                                <li className="snippet"><label className="container-checkbox">
                                                    <input type="checkbox"/>
                                                    {/* <!-- <input type="checkbox" checked="checked"> --> */}
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </li>
                                                <li className="snippet-name">Snippet 01 &nbsp; 1:23pm <br/> <span className="date">0:02:01</span></li>
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
                                                <li className="nav-li-snippet">
                                                    <img className="nav-li-icon-snippet" src={moreGrey} alt=""/>
                                                </li>
                                                <li className="">
                                                    <img className="nav-li-icon-snippet-play" src={play} alt=""/>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-3 flex">
                                            <ul className="flex">
                                                <li className="snippet"><label className="container-checkbox">
                                                    <input type="checkbox"/>
                                                    {/* <!-- <input type="checkbox" checked="checked"> --> */}
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </li>
                                                <li className="snippet-name">Snippet 01 &nbsp; 1:23pm <br/> <span className="date">0:02:01</span></li>
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
                                                <li className="nav-li-snippet">
                                                    <img className="nav-li-icon-snippet" src={moreGrey} alt=""/>
                                                </li>
                                                <li className="">
                                                    <img className="nav-li-icon-snippet-play" src={play} alt=""/>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-3 flex">
                                            <ul className="flex">
                                                <li className="snippet"><label className="container-checkbox">
                                                    <input type="checkbox"/>
                                                    {/* <!-- <input type="checkbox" checked="checked"> --> */}
                                                    <span className="checkmark"></span>
                                                  </label>
                                                </li>
                                                <li className="snippet-name">Snippet 01 &nbsp; 1:23pm <br/> <span className="date">0:02:01</span></li>
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
                                                <li className="nav-li-snippet">
                                                    <img className="nav-li-icon-snippet" src={moreGrey} alt=""/>
                                                </li>
                                                <li className="">
                                                    <img className="nav-li-icon-snippet-play" src={play} alt=""/>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        )
    }
}

export default Snippet