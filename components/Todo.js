import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
function Todo(props){
    const [modalIsOpen, setModalIsOpen] = useState(false); // useState outputs array with 2 elements (so we're destructuring here)
    function deleteHandler(){
      setModalIsOpen(true);


    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }
  return(
    <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn'onClick={deleteHandler}>Delete</button>
          {modalIsOpen&&<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/ >}
          {modalIsOpen&&<Backdrop onCancel={closeModalHandler} />}
        </div>
      </div>
  )
}
 export default Todo;