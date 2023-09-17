import './App.css'
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.tsx'
import Header from './shared/Header/Header.tsx';
import Resume from './components/Resume/Resume.tsx';
import Projects from './components/Projects/Projects.tsx'

const App = () => {
  return (
     <div className="bg-slate-800">
      <HashRouter basename={process.env.PUBLIC_URL}>
       <Header />
        <Switch>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/resume" element={<Resume />} />
           <Route exact path="/projects" element={<Projects />} />
        </Switch>
        </HashRouter>
     </div>
  );
 };

export default App
