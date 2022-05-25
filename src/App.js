import './style/landingPage.css'
import NavigationBar from './components/NavigationBar'
import PlayButtonGroup from './components/PlayButtonGroup'
import HomeLeaderboard from './components/HomeLeaderboard'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <PlayButtonGroup />
      </div>
      <HomeLeaderboard />
      
    </div>
  );
}

export default App;
