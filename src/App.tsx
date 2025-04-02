import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home-page/home-page'
import FloorPage from './pages/floor-page/floor-page'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/floor',
      element: <FloorPage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Habilita la bandera para el nuevo comportamiento
    },
  }
);

function App() {

  return <RouterProvider router={router} />;
  
}

export default App
