import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
