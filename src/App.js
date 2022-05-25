import './style/landingPage.css'
import NavigationBar from './components/NavigationBar'
import PlayButtonGroup from './components/PlayButtonGroup'
import HomeLeaderboard from './components/HomeLeaderboard'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
>>>>>>> 40fbda646c6528832b6a7717904771921d8c8de7

function App() {
  return (
    <Router>
      <div className='myBg'>
        <NavigationBar />
      <Routes>
        <Route path="/" element={
          <div>
            <PlayButtonGroup />
            <HomeLeaderboard />
          </div>
        } />
        <Route path="/login" element={
          <Login />
        } />
        <Route path="/register" element={
          <Register />
        } />
      </Routes>
      </div>
<<<<<<< HEAD
      <HomeLeaderboard />
      
    </div>
=======
    </Router>
    
>>>>>>> 40fbda646c6528832b6a7717904771921d8c8de7
  );
}

export default App;
