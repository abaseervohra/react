import React from "react";
import './App.css'
// import { Button } from "./Button/Button";
import Headertop from "./Header/Headertop";
import Slider from "./Slider/Slider"
import Card from "./Card/Card";
import About from "./About/About"
import Campus from "./Campus/Campus"
import  Card2  from "./Card2/Card2";
import Footer from "./Footer/Footer";
// import Card from "./Card/Card";
     
const App = ()=>{

  let username = "faraz";
   

  return(
    <>


     <Headertop />
     <Slider />
     <Card />
     <About />.
     <Campus />
     <Card2 />
     <Footer />
     
    </>
  )
}

export default App


// There are 3 ways to get style on jsx elements

// 1) Inline CSS
// 2) Module CSS
// 2) External CSS