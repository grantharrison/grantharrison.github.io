import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.tsx'
import Header from './shared/Header/Header.tsx';
import Resume from './components/Resume/Resume.tsx';
import Projects from './components/Projects/Projects.tsx'

const App = () => {
  return (
   <HashRouter basename={process.env.PUBLIC_URL}>
     <div className="bg-slate-800">
       <Header />
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/resume" element={<Resume />} />
           <Route exact path="/projects" element={<Projects />} />
        </Routes>
     </div>
     </HashRouter>
  );
 };

export default App
