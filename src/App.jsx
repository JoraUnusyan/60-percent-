import { useState } from 'react'

import './App.scss'
import { Header } from './components/Header/Header' 
import ProductList from './components/ProductList/ProductList'    
import Slayder from './Sections/Slayder/Slayder'
import DeliveryBanner from './Sections/DeliveryBanner/DeliveryBanner'
import ProductNavigate from './Sections/BestSellers/ProductNavigate/ProductNavigate'
import ClientsComment from './Sections/ClientsComment/ClientsComment'
import AboutUs from './Sections/AboutUs/AboutUs'
import DiscountInfo from './Sections/DiscountInfo/DiscountInfo'
import Instainfo from './Sections/Instainfo/Instainfo'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
    <Header></Header>
    <ProductList></ProductList>
     <Slayder />
     <DeliveryBanner></DeliveryBanner>
    <ProductNavigate></ProductNavigate>
    <ClientsComment></ClientsComment>
    <AboutUs></AboutUs>
    <DiscountInfo></DiscountInfo>
    <Instainfo></Instainfo>
    <Footer></Footer>
    </>
  )
}

export default App
