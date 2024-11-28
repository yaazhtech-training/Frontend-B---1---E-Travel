import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Contact from './components/Contact';
// import About from './components/About';
// import Packages from './components/Packages';
// import Packagepage from './components/Packagepage';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
     {/* <Route path='/'element={<Navbar/>}/> */}
     {/* <Route path='/login'element={<Login/>  }/>
     <Route path='/package1'element={<Packagepage/>  }/>
     <Route path='/home'element={<Home/>}/>
     <Route path='/contact'element={<Contact/>}/>
     <Route path='/about'element={<About/>}/>
     <Route path='/package'element={<Packages/>}/> */}
     
    
    
     </Routes>
     {/* //<Footer/> */}
     </BrowserRouter>
    </div>
  );
}

export default App;
