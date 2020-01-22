import React from 'react';


export default function Header(){
  return(
  <div className= "main-top" id="home">
    <div className= "headder-top fixed-top">
      <div id="logo">
        <h1> <a href="/"><img src="images/A1Abilities Logo Bha Sa12.png" alt="" width="220"/></a> </h1>
      </div>   
    </div> 
      <nav className= "float-right">
        <ul className= "menu pt-4 pr-5">
          <li> <a href="#services">Services</a> </li>
          <li> <a href="#technology">Technology</a> </li>
          <li> <a href="#about">About</a> </li>
          <li> <a href="#goals">Goals</a> </li>
          <li> <a href="#portfolio">Portfolio</a> </li>
          <li> <a href="#contact">Contact Us</a> </li>
        </ul>
      </nav>
    
   </div>
  );
}