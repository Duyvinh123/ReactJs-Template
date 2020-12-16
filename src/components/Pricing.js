import React from 'react'
import {FaFire} from 'react-icons/fa'
import {BsXDiamondFill} from 'react-icons/bs'
import {GiCrystalize} from 'react-icons/gi'
import './Pricing.css'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import { IconContext } from 'react-icons/lib';

function Pricing() {
    return (
       
        <IconContext.Provider value={{ color: '#fff', size: 44 }}>
            <div className="container-pricing">
                <div className="content-pricing">
                    <h1>Pricing</h1>
                    <div className="items-pricing">
                        <Link to="/sign-up" className="pricing__card">
                            <div className="item">
                                <div className="icon-starter">
                                    <FaFire/>
                                    <h3>Starter</h3>
                                    <h2>$8.99</h2>
                                    <p>per month</p>
                                </div>
                                <ul className="cash-item">
                                    <li>100 Transaction</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,000 limit</li>
                                </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                    </Button>
                            </div>
                        </Link>

                        <Link to="/sign-up" className="pricing__card">
                            <div className="item">
                                <div className="icon-starter">
                                    <BsXDiamondFill />
                                    <h3>Gold</h3>
                                    <h2>$29.99</h2>
                                    <p>per month</p>
                                </div>
                                <ul className="cash-item">
                                    <li>1000 Transaction</li>
                                    <li>3.5% Cash Back</li>
                                    <li>$100,000 limit</li>
                                </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Choose Plan
                                    </Button>
                            </div>
                        </Link>

                        <Link to="/sign-up" className="pricing__card">
                            <div className="item">
                                <div className="icon-starter">
                                    <GiCrystalize />
                                    <h3>Diamond</h3>
                                    <h2>$99.99</h2>
                                    <p>per month</p>
                                </div>
                                <ul className="cash-item">
                                    <li>Unlimited Transaction</li>
                                    <li>5% Cash Back</li>
                                    <li>Unlimited Spending</li>
                                </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                    </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </IconContext.Provider>
        
    )
}

export default Pricing
