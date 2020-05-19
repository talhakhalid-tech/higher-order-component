import React from "react";
import user from "../resources/user.svg";
import leftArrow from "../resources/left-arrow.svg";
import Spinner from "./Spinner/Spinner";
import firebase from "./firebase";

class Chatbar extends React.Component {
  state = {
    feedbackMessage: "",
    publicFeedbacks: [],
    loading: true,
    publicBtn: true,
  };

  componentDidMount() {
    firebase
      .database()
      .ref("feedbacks")
      .on("value", (snapshot) => {
        const feedbacks = [];
        snapshot.forEach((childSnapshot) => {
          feedbacks.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        this.setState({ publicFeedbacks: feedbacks, loading: false });
      });
  }

  changeFeedbackHandler = (e) => {
    this.setState({
      feedbackMessage: e.target.value,
    });
  };

  submitFeedbackHandler = (event) => {
    event.preventDefault();
    console.log("feedback submitted");
    let temp = [...this.state.publicFeedbacks];
    temp.push({
      id: this.state.publicFeedbacks.length,
      name: "Dummy",
      message: this.state.feedbackMessage,
      date: Date.now(),
    });
    firebase.database().ref("feedbacks").set(temp);
    this.setState({
      publicFeedbacks: temp,
      feedbackMessage: "",
    });
  };

  publicBtnHandler = () => {
    this.setState({ publicBtn: true });
  };
  privateBtnHandler = () => {
    this.setState({ publicBtn: false });
  };

  render() {
    let allFeedbacks = null;
    let loading = null;
    if (this.state.loading) {
      loading = <Spinner />;
    }
    if (this.state.publicFeedbacks.length) {
      allFeedbacks = this.state.publicFeedbacks.map((f) => {
        return (
          <div className="container" key={f.id}>
            <div className="chat-user-left">
              <img src={user} alt="Avatar" />
            </div>
            <div className="chat-user-right">
              <p className="chat-user-name">
                {f.name} <span className="chat-user-time">11:00 AM</span>
              </p>
              <p className="chat-user-message">{f.message}</p>
            </div>
          </div>
        );
      });
    }
    return (
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
              <hr className="hr-line" />
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

            <div className="form-container">
              {/* <!-- <textarea placeholder="Type message.." name="msg" required></textarea> --> */}

              <div className="flex">
                {/* <!-- Backend Boy: You have to do this by your own, to make button active--> */}
                <button
                  onClick={this.publicBtnHandler}
                  className={
                    this.state.publicBtn
                      ? "btn-public btn-public-active"
                      : "btn-private"
                  }
                >
                  Public
                </button>
                <button
                  onClick={this.privateBtnHandler}
                  className={
                    !this.state.publicBtn
                      ? "btn-public btn-public-active"
                      : "btn-private"
                  }
                >
                  Private
                </button>
              </div>

              <div className="form-container-chat">
                {allFeedbacks}
                {loading}

                {/* <!-- <textarea placeholder="Type message.." name="msg" required></textarea> --> */}

                <div class="chat-btn-div">
                  <form
                    onSubmit={this.submitFeedbackHandler}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <textarea
                      placeholder="Type message.."
                      name="msg"
                      required
                      onChange={this.changeFeedbackHandler}
                      value={this.state.feedbackMessage}
                    ></textarea>{" "}
                    {/* <!-- <button type="cancel" class="btn-cancel">Cancel</button> --> */}
                    <button type="submit" class="btn-submit">
                      <img class="btn-send-icon" src={leftArrow} alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatbar;
