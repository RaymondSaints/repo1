import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className='colorete'>
    <Routes>
      <Route exact path={"/"} element={<ItemListContainer greeting={"OFERTA EN: Volkswagen 2013 A 2022"}/>} />
      <Route exact path={"/categoria/:categoryId"} element={<ItemListContainer/>} />
      <Route exact path={"/item/:productoId"} element={<ItemDetailContainer/>} />
      <Route exact path={"/carrito"} element={<Cart/>} />
      <Route exact path={"*"} element={<Error404/>}/>
      
    </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
