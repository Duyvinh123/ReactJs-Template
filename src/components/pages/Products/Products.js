import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjThree,homeObjFour} from './Data'
import Pricing from '../../Pricing'


function Products() {
    return (
        <>
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Products
