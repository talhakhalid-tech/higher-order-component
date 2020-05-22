import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../styling/style.css'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height: '250px',
      width: '450px',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#428eff08'
    }
  };
   
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  // Modal.setAppElement('#yourAppElement')
   
  function ModalAppFolder(props){
    
    var subtitle;
    let [error,setError] = React.useState('')
    let [term, setTerm] = React.useState();
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setTerm(term ='')
      setError(error='')
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#67A3FF';
    }
   
    function closeModal(){
      if(term.length<=3){
        return setError(error = <p style={{fontSize:'14px',color:'red',marginBottom:'-7px'}}>Folder's Name is too short</p>)
      } else if(term.length>=20){
        return setError(error = <p style={{fontSize:'14px',color:'red',marginBottom:'-7px'}}>Folder's Name is too long</p>)
      }
        setIsOpen(false);
        props.returnValue(term)
    }
    
    function forceCloseModal(){
      setIsOpen(false);
    }

    const onValueChange = (event)=>{
      setTerm(term=event.target.value)
    }
   
      return (
        <>
          <button  className="btn-add" onClick={openModal}>Add</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={forceCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
   
            <h2 style={{marginBottom:'20px'}} ref={_subtitle => (subtitle = _subtitle)}>Add Folder</h2>
            <div style={{marginRight:'90px',color:'grey', fontSize:'14px'}}>Enter the Name of Folder:</div>
              <input style={{borderRadius:'3px',border:'2px solid #bbbbbb',paddingLeft:'5px',height:'35px',width:'250px'}} onChange={onValueChange} minLength="3" placeholder="Folder's Name" required/>
              {error}
              <button style={{borderRadius:'3px',width:'250px',marginTop:'10px',height:'35px'}} className="btn-add" onClick={closeModal}>Save</button>
              <p  onClick={forceCloseModal} style={{cursor:'pointer',fontSize:'17px',color:'red',marginBottom:'0px',marginTop:'10px',textDecoration:'underline'}}>close</p>
          </Modal>
        </>
      );
  }

  export default ModalAppFolder