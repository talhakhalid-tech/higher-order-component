import React from "react";
import firebase from "../firebase/firebase";
import downloadBlack from "../resources/download-black.svg";
import shareBlack from "../resources/share-black.svg";
import binBlack from "../resources/bin-black.svg";
import soundWaves from "../resources/sound-waves.svg";
import starGrey from "../resources/star-grey.svg";
import binGrey from "../resources/bin-grey.svg";
import moreGrey from "../resources/more-grey.svg";
import edit from "../resources/edit.svg";
import share from "../resources/share.svg";
import download from "../resources/download.svg";
import play from "../resources/play.svg";

class Snippets extends React.Component {
  constructor(props) {
    super(props);
    this.myDIVRef = React.createRef();
    this.myDropdownRef = [];
    this.audio = null;
    this.audioUrl = null;
    this.state = {
      dropdown: false,
      count: -1,
      snippetURLs: [],
      selectedSnippets: [],
    };
  }

  componentDidMount = async () => {
    const storageRef = firebase.storage().ref();
    var listRef = storageRef.child("snippets/folder1");
    let temp = [];
    let res = await listRef.listAll();
    res.items.forEach(async (itemRef) => {
      // let url = await itemRef.getDownloadURL();
      temp.push(itemRef);
    });
    for (let i = 0; i < temp.length; i++) {
      this.myDropdownRef[i] = React.createRef();
    }

    this.setState({
      snippetURLs: temp,
    });
  };

  onClickCheckbox = (event, index) => {
    let temp = [...this.state.selectedSnippets];
    let count = this.state.count;
    if (event.target.checked) {
      temp.push(index);
      count++;
    } else {
      temp.splice(index, 1);
      count--;
    }
    this.setState({
      selectedSnippets: temp,
      count,
    });
  };

  onClickDropdown = (i) => {
    this.myDropdownRef[i].current.classList.toggle("show");
  };

  onScreenClick = (event) => {
    if (!event.target.matches(".dropbtn")) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  changeHandler = (e) => {
    const ref = firebase.storage().ref("snippets/folder1");
    const file = e.target.files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
      contentType: file.type,
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        console.log(url);
      })
      .catch(console.error);
  };

  playOrPauseSnippet = async (itemRef) => {
    let url = await itemRef.getDownloadURL();
    if (url !== this.audioUrl) {
      this.audio = new Audio(url);
      this.audioUrl = url;
    }
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  };

  deleteSnippet = async (index) => {
    let itemRef = this.state.snippetURLs[index];
    let temp = [...this.state.snippetURLs];
    const storageRef = firebase.storage().ref();
    let file = storageRef.child(`snippets/folder1/${itemRef.name}`);
    let isDeleted = file.delete();
    if (isDeleted) {
      temp.splice(index, 1);
      this.setState({ snippetURLs: temp });
    }
  };

  deleteSelectedSnippets = () => {
    console.log(this.state.selectedSnippets);
    let temp = [...this.state.snippetURLs];
    this.state.selectedSnippets.forEach((item) => {
      temp.splice(item, 1);
      let itemRef = this.state.snippetURLs[item];
      const storageRef = firebase.storage().ref();
      let file = storageRef.child(`snippets/folder1/${itemRef.name}`);
      file.delete();
    });
    this.setState({
      snippetURLs: temp,
      count: -1,
      selectedSnippets: [],
    });
  };

  renderSnippets = () => {
    console.log(this.state.snippetURLs);

    let snippets = [];
    for (let i = 0; i < this.state.snippetURLs.length; i++) {
      snippets.push(
        <div key={i}>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 flex">
              <ul className="flex">
                <li className="snippet">
                  <label className="container-checkbox">
                    <input
                      type="checkbox"
                      checked={this.state.count <= -1 ? false : null}
                      onClick={(e) => this.onClickCheckbox(e, i)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li className="snippet-name">
                  {this.state.snippetURLs[i].name.slice(14)} &nbsp; 1:23pm{" "}
                  <br /> <span className="date">0:02:01</span>
                </li>
              </ul>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-5">
              <ul>
                <li>
                  <img className="snippet-img" src={soundWaves} alt="" />
                </li>
              </ul>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4">
              <ul className="flex right">
                <li className="nav-li-snippet">
                  <img className="nav-li-icon-snippet" src={starGrey} alt="" />
                </li>
                <li
                  className="nav-li-snippet"
                  onClick={this.deleteSnippet.bind(this, i)}
                >
                  <img className="nav-li-icon-snippet" src={binGrey} alt="" />
                </li>
                <li className="nav-li-snippet dropdown">
                  <img
                    className="nav-li-icon-snippet dropbtn"
                    onClick={this.onClickDropdown.bind(this, i)}
                    src={moreGrey}
                    alt=""
                  />
                  <div
                    ref={this.myDropdownRef[i]}
                    id="myDropdown"
                    className="dropdown-content"
                  >
                    <a href="/snippets">
                      {" "}
                      <img
                        className="nav-li-icon-snippet-dropdown"
                        src={edit}
                        alt="edit icon"
                      />{" "}
                      &nbsp; Rename
                    </a>
                    <a href="/snippets">
                      {" "}
                      <img
                        className="nav-li-icon-snippet-dropdown"
                        src={share}
                        alt="share icon"
                      />{" "}
                      &nbsp; Share
                    </a>
                    <a href="/snippets" download="my song">
                      {" "}
                      <img
                        className="nav-li-icon-snippet-dropdown"
                        src={download}
                        alt="download icon"
                      />{" "}
                      &nbsp; Download
                    </a>
                  </div>
                </li>
                <li className="">
                  <img
                    className="nav-li-icon-snippet-play"
                    src={play}
                    alt="play icon"
                    onClick={this.playOrPauseSnippet.bind(
                      this,
                      this.state.snippetURLs[i]
                    )}
                  />
                </li>
              </ul>
            </div>
          </div>
          <br />
        </div>
      );
    }
    return snippets;
  };

  render() {
    let snippets = this.renderSnippets();

    return (
      <div className="col-xl-8 col-lg-8 col-md-8" onClick={this.onScreenClick}>
        <input type="file" onChange={this.changeHandler} accept=".mp3 , .wav" />
        <div className="Section">
          <div className="section-top">
            <div className="div-50 left flex">
              <p className="heading">
                My Meetings &nbsp;{" "}
                <img
                  className="breadcrumbs-icon"
                  src="./resources/next.svg"
                  alt=""
                />{" "}
                &nbsp;{" "}
                <span className="breadcrumbs-text">Meeting with team</span>
              </p>
            </div>
            {this.state.count >= 0 ? (
              <div
                style={{ display: "block" }}
                ref={this.myDIVRef}
                id="myDIV"
                className="div-50 right"
              >
                <img
                  className="nav-li-icon-snippet"
                  alt="Download"
                  src={downloadBlack}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  className="nav-li-icon-snippet"
                  alt="Share"
                  src={shareBlack}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  className="nav-li-icon-snippet"
                  onClick={this.deleteSelectedSnippets}
                  alt="Bin"
                  src={binBlack}
                />
              </div>
            ) : null}
          </div>
          <hr className="hr-line" />
          <div className="section-main">
            <div className="card-snippet">{snippets}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Snippets;
