import React from 'react'
import user from '../resources/user.svg'
import leftArrow from "../resources/left-arrow.svg"

class Chatbar extends React.Component{
    render(){
        return(
            <div className="col-xl-2 col-lg-2 col-md-2">
                        <div className="aside">
                            {/* <!-- <div>
                                <h4>Unique Users</h4>
                            </div>
                            <div>
                                <h5>10,000</h5>
                            </div> --> */}

                            
                            <div className="chat-popup" id="myForm">
                                <div className="chat-div">
                                    {/* <!-- <div className="container">
                                        <img src="./resources/employee.svg" alt="Avatar">
                                        <p className="text-right">Hello. How are you today?</p>
                                        <span className="time-right">11:00</span>
                                    </div>
                                    
                                    <div className="container">
                                        <img src="./resources/profession-and-jobs.svg" alt="Avatar" className="right">
                                        <p>Hey! I'm fine. Thanks for asking!</p>
                                        <span className="time-left">11:01</span>
                                    </div>
                                    
                                    <div className="container">
                                        <img src="./resources/doctor.svg" alt="Avatar">
                                        <p className="text-right">So, what do you do today?</p>
                                        <span className="time-right">11:02</span>
                                    </div>
                                    
                                    <div className="container">
                                        <img src="./resources/programmer.svg" alt="Avatar" className="right">
                                        <p>Nah, I dunno. Play soccer..</p>
                                        <span className="time-left">11:05</span>
                                    </div> --> */}
                                    <div className="flex">
                                        <div className="div-50">
                                            <p className="unique-users">Unique Users</p>
                                        </div>
                                        <div className="div-50">
                                            <p className="unique-users-number">10,012</p>
                                        </div>
                                    </div>
                                    <hr className="hr-line"/>
                                    <div className="container">
                                        <p className="users">Mohammad Azeem</p>
                                    </div>
                                    <div className="container">
                                        <p className="users">Muhammad Jawad</p>
                                    </div>
                                    <div className="container">
                                        <p className="users">Bilal Tahir</p>
                                    </div>
                                    <div className="container">
                                        <p className="users">Laraib Shabbir</p>
                                    </div>
                                    <div className="container">
                                        <p className="users">Muhammad Maavia</p>
                                    </div>
                                    <div className="container">
                                        <p className="users">Yasser Zubair</p>
                                    </div>
                                </div>

                                {/* <!-- <hr className="hr-line"> --> */}

                                <form className="form-container">
                                {/* <!-- <textarea placeholder="Type message.." name="msg" required></textarea> --> */}

                                <div className="flex">
                                    {/* <!-- Backend Boy: You have to do this by your own, to make button active--> */}
                                    <button type="" className="btn-public btn-public-active">Public</button>
                                    <button type="" className="btn-private">Private</button>
                                </div>
                            
                                <div className="form-container-chat">
                                    <div className="container">
                                        <div className="chat-user-left">
                                            <img src={user} alt="Avatar"/>
                                        </div>
                                        <div className="chat-user-right">
                                            <p className="chat-user-name">Muhammad Maavia <span className="chat-user-time">11:00 AM</span></p>
                                            <p className="chat-user-message">Hello. How are you today?</p>
                                        </div>
                                    </div>
    
                                    <div className="container">
                                        <div className="chat-user-left">
                                            <img src={user} alt="Avatar"/>
                                        </div>
                                        <div className="chat-user-right">
                                            <p className="chat-user-name">Muhammad Maavia <span className="chat-user-time">11:00 PM</span></p>
                                            <p className="chat-user-message">Hello. How are you today?</p>
                                        </div>
                                    </div>
    
                                    <div className="container">
                                        <div className="chat-user-left">
                                            <img src={user} alt="Avatar"/>
                                        </div>
                                        <div className="chat-user-right">
                                            <p className="chat-user-name">Muhammad Maavia <span className="chat-user-time">11:00 AM</span></p>
                                            <p className="chat-user-message">Hello. How are you today?</p>
                                        </div>
                                    </div>
    
                                    <div className="container">
                                        <div className="chat-user-left">
                                            <img src={user} alt="Avatar"/>
                                        </div>
                                        <div className="chat-user-right">
                                            <p className="chat-user-name">Muhammad Maavia <span className="chat-user-time">11:00 AM</span></p>
                                            <p className="chat-user-message">Hello. How are you today?</p>
                                        </div>
                                    </div>
    
    
                                    {/* <!-- <textarea placeholder="Type message.." name="msg" required></textarea> --> */}
    
    
                                    <div class="chat-btn-div">
                                        <textarea placeholder="Type message.." name="msg" required></textarea>
                                        {/* <!-- <button type="cancel" class="btn-cancel">Cancel</button> --> */}
                                        <button type="submit" class="btn-submit"> <img class="btn-send-icon" src={leftArrow} alt=""/> </button>
                                    </div>
                                </div>

                                </form>
                            </div>

                        </div>
                    </div>
        )
    }
}

export default Chatbar