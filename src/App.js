
import './App.css';
import Caraousel from './Components/Caraousel/Caraousel';
import Catagory from './Components/Catagory/Catagory';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';

function App() {
  return (
    <div className="App">
     <Header/>
     <Caraousel/>
     <Catagory/>
     <Product/>
    </div>
  );
}

export default App;
