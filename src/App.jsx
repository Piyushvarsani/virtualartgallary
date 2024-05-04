
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './component/Root'
import ArtStore from './pages/ArtStore';
import Login from './component/Login';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/Home';
import SingleArtProduct from './component/SingleArtProduct';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='store' element={<Outlet />} >
        <Route index element={<ArtStore />} />
        <Route path=':id' element={<SingleArtProduct />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='user' element={<ProtectedRoute />}>
        <Route index element={<Profile />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Route>
  </>
));


function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
