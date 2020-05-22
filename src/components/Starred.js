import React from 'react'
import history from '../history.js'
import downloadBlack from '../resources/download-black.svg'
import shareBlack from '../resources/share-black.svg'
import binBlack from '../resources/bin-black.svg'
import folder from '../resources/folder.svg'


class Starred extends React.Component{
    render(){
        return(
            <div className="col-xl-8 col-lg-8 col-md-8">
                    <div className="Section">
                            <div className="section-top">
                                <div className="div-50 left">
                                    <p className="heading">My Meetings</p>
                                </div>
                                <div className="div-50 right">
                                    <div id="myDIV" ref={this.myDIVRef} className="my-div-more">
                                        <img className="nav-li-icon-snippet" alt="" src={downloadBlack}/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        {/*onClick="on()" we need to use this function in coming img tag */}
                                        <img className="nav-li-icon-snippet" alt="" src={shareBlack} />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <img className="nav-li-icon-snippet" alt="" src={binBlack}/>
                                    </div>

                                    <button className="btn-more" onClick={this.checkFun} >select</button>
                                    <button className="btn-date">By Date</button>
                                    <button className="btn-add">Add</button>
                                </div>
                            </div>
                            
                            <hr className="hr-line"/>
    
                        </div>
            </div>
        )
    }
}

export default Starred