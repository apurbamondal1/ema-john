import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './Login/Login';
import SignUp from './Login/SignUp/SignUp';
import Shipping from './components/shipping/Shipping';
import Privateroute from './routes/Privateroute';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Privateroute><Inventory></Inventory></Privateroute>
        },
        {
          path: 'shipping',
          element: <Privateroute><Shipping></Shipping></Privateroute>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
         path:'login',
         element:<Login></Login>
        },
        { 
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
