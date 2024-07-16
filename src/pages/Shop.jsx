import React from 'react'
import Heropage from '../components/heropage/Heropage'
import Popularwomen from '../components/popular-women/Popularwomen'
import Popularmen from '../components/popular-men/Popularmen'
import Popularkids from '../components/popular-kids/Popularkids'
import Offers from '../components/offers/Offers'
import Footer from '../components/footer/Footer'


function Shop() {
  return (
    <div>
    <Heropage/>
    <Popularwomen/>
    <Popularmen/>
    <Popularkids/>
    <Offers/>
    <Footer/>
    </div>
  )
}

export default Shop