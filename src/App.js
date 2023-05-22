import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/create" element={<Create/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
