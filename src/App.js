
import Dashboard from './Components/Dashboard';
import Addevent from './Components/Addevent';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Preview from './Components/Preview';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EventState from './Context/event/EventState'
function App() {
  return (
    <>
    <EventState>
      <Router>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/add' element={<Addevent />} />
            <Route path='/preview' element={<Preview/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
          </Routes>
      </Router>
    </EventState>

  </>
  );
}

export default App;
