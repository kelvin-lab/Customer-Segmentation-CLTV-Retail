import { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RFMAnalysis from './components/RFMAnalysis';
import StoryTelling from './components/StoryTelling';
import Exploratory from './components/Exploratory';
import DataDictionary from './components/DataDictionary';
import StrategyMenu from './components/StrategyMenu';
import Insights from './components/Insights';
import Modelo from './components/Modelo';



function App() {

 
  //console.log(data.customer_id, data.Recency);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<StoryTelling />} />
          <Route path="/Exploratory" element={<Exploratory />} />
          <Route path="/RFMAnalysis" exact element={<RFMAnalysis/>} />
          <Route path="/Modelo" element={<Modelo/>} />
          <Route path="/Insights" element={<Insights />} />
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






