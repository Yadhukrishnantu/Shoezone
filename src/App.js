import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Shoes from './components/Shoes';
import Shoeview from './components/Shoeview';
import { Route,Routes } from 'react-router-dom';
import Review from './components/Review';


function App() {
  return (
    <div className="App">
      <Header/>

     <Routes>
      <Route path='/' element={<Shoes></Shoes>}></Route>
      <Route path='/view-shoes/:id' element={<Shoeview></Shoeview>}></Route>
     </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
