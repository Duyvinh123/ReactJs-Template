import React from 'react'
import './Button.css'

const STYLES=['btn--primary','btn--outline']

const SIZE=['btn--medium','btn--large','btn--mobile','btn--wide']

const COLOR=['primary','blue','red','green']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle)?
    buttonStyle : STYLES[0]

    const checkButtonSiZe = SIZE.includes(buttonSize)?
    buttonSize : SIZE[0]

    const checkButtonColor = COLOR.includes(buttonColor)?
    buttonColor : null

    return (
        <button className={`btn ${checkButtonStyle} 
        ${checkButtonSiZe} 
        ${checkButtonColor}`} 
        onClick={onClick} 
        type={type}>
            {children}
        </button>
    )
}
