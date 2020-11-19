import React from 'react';

export interface Props {
    value:string,
    style:any,
    onClick:() => void,
    className: any,
    
}
export const Button = ({value, style, onClick, className}:Props) => {
    return (
        <button  style={style} onClick={onClick} className={className}>
            {value}
        </button>
    )
}
Button.defaultProps = {
    onClick:()=>{
        alert('clicked')
    },
    value:"check",
    
}