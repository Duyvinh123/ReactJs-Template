import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne} from './Data'
import Pricing from '../../Pricing'


function Services() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <Pricing />
        </>
    )
}

export default Services
