import { createBrowserRouter } from 'react-router-dom';
import { Home, Medicine, Blog, Contact } from '../../features';
import { AppLayout } from '../../layout';

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'medicine',
        element: <Medicine />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);
