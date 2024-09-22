import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import ProductPage from './components/ProductPage';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/products/:productId' element={<ProductPage/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      {/* <Product /> */}
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
