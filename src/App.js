import './style/landingPage.css'
import NavigationBar from './components/NavigationBar'
import PlayButtonGroup from './components/PlayButtonGroup'
<<<<<<< HEAD
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
=======
import HomeLeaderboard from './components/HomeLeaderboard'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
>>>>>>> 805420f630bf27e0a2b7d4bfe1b4344a39e1efa2
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className='myBg'>
        <NavigationBar />
<<<<<<< HEAD
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
        </Routes>
      </div>
      <Footer />

      {/* </div> */}
    </Router>

=======
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
    
>>>>>>> 805420f630bf27e0a2b7d4bfe1b4344a39e1efa2
  );
}

export default App;
