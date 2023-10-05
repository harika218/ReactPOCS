import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>

  ))





  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter.value)
  return (
    <div className="App">
      {/* <div className='container'>
        <div className='row'>
          <div className='col-sm mt-4'>
            <h3>Counter: {count}</h3>
            <button className='btn btn-primary me-2' onClick={() => dispatch(increment())}>Increment</button>
            <button className='btn btn-warning me-2' onClick={() => dispatch(decrement())}>Decrement</button>
            <button className='btn btn-danger' onClick={() => dispatch(reset())}>Reset</button>
          </div>

        </div>
      </div> */}


      {/* <Routes>
        <Route path="/" element={<TutorialList />}></Route>
        <Route path="/add-tutorials" element={<AddTutorial />}></Route>
        <Route path="/edit-tutorial" element={<EditTutorial />}></Route>
      </Routes> */}





      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
