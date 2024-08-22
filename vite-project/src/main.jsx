import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Book from './components/book';
import Bookshop from './components/bookshop';
import Publisher from './components/publisher';
import Favbooks from './components/FavBooks';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      
      <Route path='/' element={ <Book />}>
        <Route path='newbooks/:bookId' element={<Favbooks />}></Route>
      </Route>

      <Route path='bookshop' element={<Bookshop />}></Route>
      <Route path='publisher/:itemId' element={<Publisher />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
