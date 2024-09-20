import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Collections from "../Components/Collections";
import Footer from "../Components/Footer";
import { Gents} from "../data";
import {Ladies} from "../data";
import Womanfashion from "../Components/Womenfashion";
function Mainpage(){
    const [gentsFashion,setGentsFashion]=useState(Gents);
    const [ladiesFashion,setLadiesFashion]=useState(Ladies)
    return(
        <div>
            <Header/>
            <Banner/>
            <Collections gentsFashion={gentsFashion}/>
            <Womanfashion ladiesFashion={ladiesFashion}/>
            <Footer/>
        </div>
    )
}
export default Mainpage;