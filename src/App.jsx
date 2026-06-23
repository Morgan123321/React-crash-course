import logo from './logo.svg';
import './App.css';
import Todo from './components/TODO.jsx'

function App() {
  return (
    <div>
    <h1>My Todo List</h1>
<Todo></Todo>
    <div>
    <h2>Finish Frontend Simplified</h2>
    <button>Delete</button>
    </div>
      
    <div>
    <h2>Finish the interview section </h2>
    <button>Delete</button>
    </div>

      <div>
    <h2>Land a 100k job</h2>
    <button>Delete</button>
    </div>

    </div>
  );
}

export default App;
