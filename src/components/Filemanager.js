import React from 'react'
import history from '../history.js'
import downloadBlack from '../resources/download-black.svg'
import shareBlack from '../resources/share-black.svg'
import binBlack from '../resources/bin-black.svg'
import folder from '../resources/folder.svg'


class Filemanager extends React.Component{

    constructor(props){
        super(props)
        this.FileRef=[]
        this.cardsList = []
        this.cards=[{name: 'first',date:'1-January-2020'},
                    {name: 'second',date:'1-February-2020'},
                    {name: 'third',date:'1-March-2020'},
                    {name: 'forth',date:'1-April-2020'},
                    {name: 'fifth',date:'1-May-2020'}]
        for(let i =0 ; i<this.cards.length;i++){
            this.FileRef[i] = React.createRef()
        }
        this.myDIVRef = React.createRef()
        this.state={toggleCheck: false,selectButton: 'Select'}
        this.count = 0
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

    onCardClick(){
        history.push('/snippets')
    }

    sectionRender = (i,col) =>{
        let cards=[]
        for(let j = 0;j<col;j++){
            cards.push(
                    <div key={j}  className="card margin-left-10">
                        {/* <!-- <div className="card"> --> */}
                        <ul className="flex">
                                <li className="folder"><img src={folder} alt=""  onClick={this.onCardClick}/></li>
                                <li className="date" onClick={this.onCardClick}>{this.cards[i*4+j].date} <br/> <span className="folder-name" >{this.cards[i*4+j].name}</span></li>
                            <div className="container-checkbox-more"  ref={this.FileRef[i*4+j]}  id="myMoreDIV">
                                <li className="snippet">
                                    <label className="container-checkbox">
                                        <input type="checkbox" onClick={this.onClickCheckbox} />
                                        {/* <!-- <input type="checkbox" checked="checked"/> --> */}
                                        {/* onClick="myFunctionCheckbox()" we need to use this function in coming span tag */}
                                        <span className="checkmark" ></span>
                                  </label>
                               </li>
                            </div>
                        </ul>
                    </div>
                )
        }
        return cards

    }

    renderCards(){
        let row = Math.ceil(this.cards.length/4)
        for(let i = 0;i<row;i++){
            let col
            if((this.cards.length-(i*4)) >= 4){
                col = 4
            }else{
                col = this.cards.length-(i*4)
            }
            console.log(col)
            this.cardsList.push(<div key={i}  className="section-main">
                        {this.sectionRender(i,col)}
                        </div>)
            this.cardsList.push(<br key={i+4}/>)
        }
        console.log(this.cardsList)
        return this.cardsList
    }

    checkFun=()=>{
        if(!this.state.toggleCheck){
            for(let i =0;i<this.cards.length;i++){
                this.FileRef[i].current.style.display = 'block'
            }
            this.setState({toggleCheck: true,selectButton:'Unselect'})
        } else{
            for(let i =0;i<this.cards.length;i++){
                this.FileRef[i].current.style.display = 'none'
            }
            this.setState({toggleCheck: false,selectButton:'Select'})
        }
    }

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

                                    <button className="btn-more" onClick={this.checkFun} >{this.state.selectButton}</button>
                                    <button className="btn-date">By Date</button>
                                    <button className="btn-add">Add</button>
                                </div>
                            </div>
                            
                            <hr className="hr-line"/>
    
                            {this.renderCards()}
                        </div>
            </div>
        )
    }
}

export default Filemanager