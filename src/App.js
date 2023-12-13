import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/AuthNavbar"
import Home from "./pages/Home"
import AllProjects from "./pages/AllProjects"
import ProjectDetails from './pages/ProjectDetails';
import Form from "./pages/Form"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/AllProjects' element={<AllProjects/>}/>
          <Route path='/ProjectDetails' element={<ProjectDetails/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
