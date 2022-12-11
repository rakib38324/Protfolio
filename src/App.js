import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Aboutme from './Pages/Aboutme';
import Project from './Pages/Project';
import Contactme from './Pages/Contactme';



function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      
      <Home></Home>
      <Project></Project>
      <Aboutme></Aboutme>
      <Contactme></Contactme>
      <Footer></Footer>
    </div>
  );
}

export default App;
