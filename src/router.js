import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Form from './pages/Form';
import PageInfo from './pages/PageInfo';
import Front from './pages/Front';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path: '/',
      element: <Front />,
    }, {
      path: '/form',
      element: <Form />,
    }, {
      path: '/info',
      element: <PageInfo />,
    }]
  }
]);

export { router }