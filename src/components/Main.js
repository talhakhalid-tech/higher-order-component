import React from 'react'
import downloadBlack from '../resources/download-black.svg'
import shareBlack from '../resources/share-black.svg'
import binBlack from '../resources/bin-black.svg'
import folder from '../resources/folder.svg'

class Main extends React.Component{
    render(){
        return(
            <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="Section">
                            <div class="section-top">
                                <div class="div-50 left">
                                    <p class="heading">My Meetings</p>
                                </div>
                                <div class="div-50 right">
                                    <div id="myDIV" class="my-div-more">
                                        <img class="nav-li-icon-snippet" src={downloadBlack}/>
                                        <img class="nav-li-icon-snippet" src={shareBlack} onclick="on()"/>\
                                        <img class="nav-li-icon-snippet" src={binBlack}/>
                                    </div>

                                    <button class="btn-more" onclick="myFunctionMore()" >Select</button>
                                    <button class="btn-date">By Date</button>
                                    <button class="btn-add">Add</button>
                                </div>
                            </div>
                            
                            <hr class="hr-line"/>
    
                            <div class="section-main">
                                <div class="card" onClick="location.href='snippet.html'">
                                {/* <!-- <div class="card"> --> */}
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                        <div class="container-checkbox-more" id="myMoreDIV">
                                            <li class="snippet">
                                                <label class="container-checkbox">
                                                <input type="checkbox"/>
                                                {/* <!-- <input type="checkbox" checked="checked"/> --> */}
                                                <span class="checkmark" onclick="myFunctionCheckbox()"></span>
                                              </label>
                                            </li>
                                        </div>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>
                            </div>

                            <br/>

                            <div class="section-main">
                                <div class="card">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>
                            </div>

                            <br/>

                            <div class="section-main">
                                <div class="card">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>
                            </div>

                            <br/>

                            <div class="section-main">
                                <div class="card">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>

                                <div class="card margin-left-10">
                                    <ul class="flex">
                                        <li class="folder"><img src={folder} alt=""/></li>
                                        <li class="date">20 March, 2019 <br/> <span class="folder-name">Meeting with team</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

export default Main