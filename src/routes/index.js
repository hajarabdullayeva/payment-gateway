import Root from '../pages/site/Root'
import Home from '../pages/site/Home'
import Login from '../pages/site/Login'
import Register from '../pages/site/Register'
import AdminRoot from '../pages/admin/AdminRoot'
import CompanyDetail from '../pages/admin/CompanyDetail'
import CompanyRoot from '../pages/companyAdmin/CompanyRoot'
import CreateLink from '../pages/companyAdmin/CreateLink'
import Dashboard from '../pages/admin/Dashboard/index'
import CompanyDashboard from '../pages/companyAdmin/companyDashboard/CompanyDashboard'

export const ROUTES = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminRoot />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'company-detail/:id',
        element: <CompanyDetail />,
      },
    ],
  },
  {
    path: '/company-admin',
    element: <CompanyRoot />,
    children: [
      {
        path: '',
        element: <CompanyDashboard />,
      },
      {
        path: 'create-link',
        element: <CreateLink />,
      },
    ],
  },
]
