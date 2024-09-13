import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/booking' element={<BookingPage />} />
    </Route>
  )
);


const App = () => {

  

  return <RouterProvider router={router} />;


  // <>
  // <Navbar />
  // <Hero />
  // <Orders/>
  // <div className="border border-gray-100 mb-5"></div>
  // <Dishes dishes={dishes}/>

  // </>



}

export default App