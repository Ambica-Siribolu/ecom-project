import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
const Product=lazy(()=>(import('./Components/Product/Product')));
const ProductDetail=lazy(()=>(import( './Components/ProductDetail/ProductDetail')));
const Dashboard= lazy(()=>import('./Components/Dashboard/Dashboard'));
const Login=lazy(()=>import('./Components/Login/Login'));
const SignUp=lazy(()=> import('./Components/SignUp/SignUp'));


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Suspense fallback={<h3>page is loading please wait...!</h3>}>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/product' element={<Product/>} />
            <Route path='/productInfo/:id' element={< ProductDetail/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>Page Not Found</h1>} /> 

      </Routes>
        </Suspense>  
  </BrowserRouter>
  )
}

export default App;

