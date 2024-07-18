import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from "./components/pages/Home"
import Footer from "./components/pages/Footer"
import Navbar from './components/pages/Navbar'
import Contactus from './components/pages/Contactus'
import Aboutus from './components/pages/Aboutus'
import Why from './components/pages/Why'
import Recipes from './components/pages/Recipes'
import Store from './components/slice/Store'
import Cart from './components/pages/Cart'
import Userlogin from './components/pages/Userlogin'
import Singleproduct from './components/pages/Singleproduct'




const App = () => {
  return (
    <div>
    <Provider store={Store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path='Aboutus' element={<Aboutus />} />
          <Route path='Why' element={<Why />} />
          <Route path='Recipes' element={<Recipes />} />
          <Route path='Cart' element={<Cart/>}/>
          <Route path='Userlogin' element={<Userlogin/>}/>
          <Route path='demo/:id' element={<Singleproduct/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App