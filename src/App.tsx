import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsList/>
      <Cart/>
    </div>
  );
}

export default App;
