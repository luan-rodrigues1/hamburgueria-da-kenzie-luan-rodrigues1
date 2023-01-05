import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsList/>
      <Cart/>
      <ToastContainer
      position="top-center"
      autoClose={1200}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
  );
}

export default App;
