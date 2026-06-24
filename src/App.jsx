import logo from './logo.svg';
import './App.css';
import Todo from './components/TODO.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
    <Title/>
    <div className='todo__wrapper'>
<Todo title="Finish Frontend Simplified"
paragraph="Code along with Frontened Simplified step by step."/>
<Todo title="Finish Interview Section"
paragraph="Finish every interview question in the next six weeks."/>
<Todo title="Land a 100k job"
paragraph="Apply to 100 jobs."/>
 </div>
 
 </div>
  );
}

export default App;
