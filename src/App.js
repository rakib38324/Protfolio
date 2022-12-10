import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
