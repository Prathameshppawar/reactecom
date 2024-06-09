import React from 'react'
import CategoryList from '../components/CategoryList'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div >
      <CategoryList/>

      <VerticalCardProduct category={"electronics"} heading={"Electronics"}/>

      <VerticalCardProduct category={"mobcom"} heading={"Mobiles & Computers"}/>
      <VerticalCardProduct category={"mensfashion"} heading={"Men's fashion"}/>
      <VerticalCardProduct category={"books"} heading={"Books"}/>
      <VerticalCardProduct category={"womensfashion"} heading={"Women's fashion"}/>
      <VerticalCardProduct category={"home"} heading={"Home, Kitchen, Pets"}/>
      <VerticalCardProduct category={"beauty"} heading={"Beauty"}/>
      <VerticalCardProduct category={"sports"} heading={"Sports and Fitness"}/>

    </div>
  )
}

export default Home