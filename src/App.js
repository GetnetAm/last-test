import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Footer from './pages/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
      <Route exact path="/last-test" element ={<Home />} /> 
        <Route path="/" element ={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/store" element ={<Store />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
      <Footer />
   
    </div>
  );
}

export default App;
