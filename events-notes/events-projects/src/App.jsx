import './App.css';
import Events from './components/events/Events';
import UseStateHook from './components/useStateHook/UseStateHook';
import DataStorage from './components/useStateHook/DataStorage';



function App() {
  return (
    <div className="text-center bg-warning">
      {/* <h1>React Events</h1> */}
      {/* <Events/> */}
      {/* <UseStateHook/> */}
      <DataStorage/> 
      
    </div>
  );
}

export default App;