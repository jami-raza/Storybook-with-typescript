import React from 'react';

export interface Props {
    value:string,
    style:any,
    onClick:() => void,
    
    
}
export const Button = ({value, style, onClick, }:Props) => {
    return (
        <button  style={style} onClick={onClick} >
            {value}
        </button>
    )
}
Button.defaultProps = {
    onClick:()=>{
        alert('clicked')
    },
    value:"check",
    style:{backgroundColor:"red",color:"#fff"}
}