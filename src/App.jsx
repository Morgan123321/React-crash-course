import logo from './logo.svg';
import './App.css';
import Todo from './components/TODO.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import Counter from './components/Counter.jsx'
import React, {useState, useEffect} from 'react';


function App() {
const [showModal, setShowModal]=useState(false)

function onTodoDelete () {
  setShowModal(true);

}

function cancelModal(){
  setShowModal(false);
}

function confirmModal() {
setShowModal(false)
}

useEffect(()=>{
  console.log('ONLY on mount')

}, [])

useEffect(()=> {
  console.log(`on mount AND on ${showModal} change`)

}, [showModal])

  return (
    <div>
    <Title/>
    <div>
      <input type="text" onChange={(event)=>{
        console.log (event.target.value)
      }}/>
      <button onClick={() =>setShowModal(true)}>Add Todo</button>
    </div>
    <div className='todo__wrapper'>
<Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"
paragraph="Code along with Frontened Simplified step by step."/>
<Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"
paragraph="Finish every interview question in the next six weeks."/>
<Todo onTodoDelete={onTodoDelete} title="Land a 100k job"
paragraph="Apply to 100 jobs."/>
 </div>
 {showModal && (
 <Modal
 cancelModal={cancelModal}
 confirmModal={confirmModal}
 title="Confirm Delete?"
 />
)}

 </div>
  );
}

export default App;
