import './App.css'
import LogIn from './Login and SignIn/LogIn'
import SignUp from './Login and SignIn/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashBoard from './User/UserDashBoard';

function App() {
 

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<UserDashBoard/>} />
      </Routes>
    </Router>

    </div>
  )
}

export default App
