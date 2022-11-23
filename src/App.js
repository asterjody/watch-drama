import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import Trending from './components/Trending'
import Drama from './components/Drama'
import './style/landingpage.css'


function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <section id="trending">
        <Trending />
        </section>
      </div>    
      <div className="drama">
      <section id="drama">
        <Drama />
        </section>
      </div>   
    </div>
  );
}

export default App;
