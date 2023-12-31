import './App.css';
import Navbar from './components/Navbar';
import CodeForInterview from './components/CodeForInterview';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<CodeForInterview />} ></Route>
        <Route path='/all' element={ <AllUsers />} ></Route>
        <Route path='/add' element={ <AddUser />} ></Route>
        <Route path='/edit/:id' element={ <EditUser />} ></Route>
      
      </Routes>
      
      </Router>
     
    </div>
  );
}

export default App;
