import './style/landingPage.css'
import NavigationBar from './components/NavigationBar'
import PlayButtonGroup from './components/PlayButtonGroup'
import HomeLeaderboard from './components/HomeLeaderboard'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'

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
    </Router>
    
  );
}

export default App;
