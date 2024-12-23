import logo from './logo.svg';
import './App.css';
import Home from './Home';
import MainContent from './MainContent';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signin from './Signin';
import Layout from './Layout';
function App() {
  return (
    <div className="App">
 
    <BrowserRouter>
    <Layout/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
