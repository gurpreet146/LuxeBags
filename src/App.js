import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/products';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      <Contact/>
    </>
  );
}

export default App;
