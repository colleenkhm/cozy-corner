import { createHashRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home from './routes/Home';
import About from './routes/About';
import Work from './routes/Work';
import Resume from './routes/Resume';
import Contact from './routes/Contact';
import Travels from './routes/Travels';

const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'work', element: <Work /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
      { path: 'travels', element: <Travels /> },
    ],
  },
  {
    basename: '/cozy-corner/',
  }
]);

export default router;