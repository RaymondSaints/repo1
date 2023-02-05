import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';
import IternListContainer from './components/IternListContainer';


function App() {
  return (
    <>
    <Navbar />
    <IternListContainer greeting={"oferta en: Queso Azul 25% Descuento"}/>
    <Main />
    <Footer />
    </>
  );
}

export default App;
