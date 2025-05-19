import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home-page/home-page'
import FloorPage from './pages/floor-page/floor-page'
import UmaPage from './pages/uma-page/uma-page';
import VavPage from './pages/vav_page/vav_page';
import ChillersPage from './pages/chillers-page/chilers-page';
import CoolingTowersPage from './pages/cooling-towers-page/cooling-towers-page';


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
    {
      path: '/uma',
      element: <UmaPage />,
    },
    {
      path: '/vav',
      element: <VavPage />,
    },

    {
      path: '/chillers',
      element: <ChillersPage />,
    },

    {
      path: '/cooling-towers',
      element: <CoolingTowersPage />,
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
