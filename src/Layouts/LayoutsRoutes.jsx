import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/Home'
import Dishes from '../Pages/Dishes/Dishes'
import Booking from '../Pages/Booking/Booking'
import AboutUs from '../Pages/AboutUs/AboutUs'
import NotFound from '../Pages/NotFound/NotFound'


function LayoutsRoutes() {
  return (
    <Router>
        <Header/>

        <Routes>

            <Route path='/' element={<Home/>}></Route>
            <Route path='/restaurant-react-app' element={<Home/>}></Route>
            <Route path='/dishes' element={<Dishes/>}></Route>
            <Route path='/services' element={<Booking/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutsRoutes
