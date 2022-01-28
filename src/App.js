import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Top from './pages/Top';
import Show from './pages/Show';
import New from './pages/New';
import Ask from './pages/Ask';
import Job from './pages/Job';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/common/Header';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top />} />
        <Route path="/new" element={<New />} />
        <Route path="/show" element={<Show />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/job" element={<Job />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
