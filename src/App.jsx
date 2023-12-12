
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoutes from './routes/MainRouter';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
      <div>
        <CartProvider>
          <MainRoutes/>
        </CartProvider>
      </div>
    </>
  )
}

export default App;
