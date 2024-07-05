import { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RFMAnalysis from './components/RFMAnalysis';
import StoryTelling from './components/StoryTelling';
import DataDictionary from './components/DataDictionary';
import StrategyMenu from './components/StrategyMenu';
import data from './data/data.json';

function App() {

 
  const [error, setError] = useState(null);
  console.log(data);
 

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/RFMAnalysis" exact element={<RFMAnalysis/>} />
          <Route path="/" element={<StoryTelling />} />
          <Route path="/Dictionary" element={< DataDictionary/>} />
          <Route path="/Strategies" element={< StrategyMenu/>} />


          {/* Agrega más rutas según tus necesidades */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


  /*<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    <IntroSection />
    <StoryTelling />  
    <Footer />
  </div>
  
</div>*/



/*    <h1>Chart.js con React JS</h1>
 <Bar data={data} options={options} />
  */



