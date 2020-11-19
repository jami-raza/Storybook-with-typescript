import React, { Children } from "react";
import {Button, Props } from "../Components/Button";
import '../App.css'

export default {
    component: Button,
    title: "Button",
    argsTypes:{
      backgroundColor: {control: 'color'},
    }
  } ;
  
 export const BtnLg = () => (
  <Button value={"Large"} style={{width:"250px",backgroundColor:"blue",}}
  onClick={()=>alert('clicked')}
  className="btn"
  />
  
 ) 
 export const BtnMd = () => (
  <Button value={"Medium"} style={{width:"150px",backgroundColor:"red",}}
  onClick={()=>alert('clicked')}
  className="btn"
  />
  
 )
 export const BtnSm = () => (
  <Button value={"Small"} style={{width:"75px",backgroundColor:"grey",}}
  onClick={()=>alert('clicked')}
  className="btn"
  /> 
 )