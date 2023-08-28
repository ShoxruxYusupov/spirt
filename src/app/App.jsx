import { RouterProvider } from 'react-router-dom';
import { appRoutes } from './routes';

export function App() {
  return <RouterProvider router={appRoutes} />;
}
