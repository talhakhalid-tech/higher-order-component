import React from 'react'
import history from '../history.js'
import moment from 'moment'
import _ from 'lodash'
import downloadBlack from '../resources/download-black.svg'
import shareBlack from '../resources/share-black.svg'
import binBlack from '../resources/bin-black.svg'
import folder from '../resources/folder.svg'
import Modal from './ModalAddFolder'


class Filemanager extends React.Component{

    constructor(props){
        super(props)
        this.FileRef=[]
        this.cardsList=[]
        this.newcards =[]
        this.cards=[{name: 'first',date:'01-January-2020'},
                    {name: 'second',date:'01-February-2020'},
                    {name: 'third',date:'01-March-2020'},
                    {name: 'forth',date:'01-April-2020'},
                    {name: 'fifth',date:'01-May-2020'}]
        for(let i =0 ; i<this.cards.length;i++){
            this.FileRef[i] = React.createRef()
        }
        this.myDIVRef = React.createRef()
        this.state={toggleCheck: false,selectButton: 'Select',totalCards: this.cards.length,sorted:false}
        this.count = 0
    }

    componentWillUpdate=()=>{
        this.cardsList=[]
        for(let i =0 ; i<this.cards.length;i++){
            this.FileRef[i] = React.createRef()
        }
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
                                <li className="date" onClick={this.onCardClick}>{this.newcards[i*4+j].date} <br/> <span className="folder-name" >{this.newcards[i*4+j].name}</span></li>
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
        this.newcards = this.cards.filter(card => {
            return card.name.includes(this.props.search)
        })
        let row = Math.ceil(this.newcards.length/4)
        for(let i = 0;i<row;i++){
            let col
            if((this.newcards.length-(i*4)) >= 4){
                col = 4
            }else{
                col = this.newcards.length-(i*4)
            }
            this.cardsList.push(<div key={i}  className="section-main">
                        {this.sectionRender(i,col)}
                        </div>)
            this.cardsList.push(<br key={i+row+1}/>)
        }
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

    onAddClick=(term)=>{
        var date = new Date();
        var currentTime = date.getTime();
        this.cards.push({name: term,date:moment(currentTime).format('DD-MMMM-YYYY')})
        this.setState({totalCards: this.cards.length})
    }

    sortByDate=()=>{
        // this.cards = _.orderBy(this.cards, 'date',['desc'])
            this.cards = this.cards.sort(function (a, b) {
              return moment(b['date']) - moment(a['date'])
            });
        this.setState({sorted:true})
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
                                    <button className="btn-date" onClick={this.sortByDate}>By Date</button>
                                    {/* <button className="btn-add" onClick={this.addFolder}>Add</button> */}
                                    <Modal  returnValue={this.onAddClick}/>
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