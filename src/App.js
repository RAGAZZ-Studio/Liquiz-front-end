import './style/landingPage.css'
import NavigationBar from './components/NavigationBar'
import PlayButtonGroup from './components/PlayButtonGroup'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
import Questions from './components/Questions'
import Leaderboard from './components/Leaderboard'
import Shop from './components/Shop'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <div className='myBg'>
        <NavigationBar />
        <Routes>
          <Route path="/" element={
            <div>
              <PlayButtonGroup />
              <Footer />
            </div>
          } />
          <Route path="/login" element={
            <Login />
          } />
          <Route path="/register" element={
            <Register />
          } />
          <Route path="/play" element={
            <Questions />
          } />
          <Route path="/leaderboard" element={
            <Leaderboard />
          } />
          <Route path="/shop" element={
            <Shop />
          } />
          <Route path="/profile" element={
            <Profile />
          } />
        </Routes>
      </div>
      <Footer />

      {/* </div> */}
    </Router>

  );
}

export default App;
