
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
 import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Packages from './components/Packages';
import Packagepage from './components/Packagepage';
import Destination from './components/Destination';
import MaldivesPackage from './components/Packages/MaldivesPackage';
import Paris from './components/Packages/Paris package/Paris';
import Switzerland from './components/Packages/Switzerland/Switzerland';






function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
     {/* <Route path='/'element={<Navbar/>}/> */}
     <Route path='/'element={<Home/>  }/>
     <Route path='/destine'element={<Destination/>  }/>
     <Route path='/login'element={<Login/>  }/>
     <Route path='/package1'element={<Packagepage/>  }/>
     <Route path='/home'element={<Home/>}/>
     <Route path='/contact'element={<Contact/>}/>
     <Route path='/about'element={<About/>}/>
     <Route path='/package'element={<Packages/>}/>
 {/*  package      */}
 <Route path='/maldives'element={<MaldivesPackage/>}/>
 <Route path='/paris'element={<Paris/>}/>
 <Route path='/switz'element={<Switzerland/>}/>

    
     </Routes>
     <Footer/> 
     </BrowserRouter>
    </div>
  );
}

export default App;
