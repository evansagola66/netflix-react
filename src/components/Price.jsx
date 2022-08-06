import React from 'react';
import styled from 'styled-components';
import PriceCards from './PriceCard';

const Container=styled.div`
align-item:flex-start; 
display:flex;
height:10%;
background-color:yellow; 
padding-left:20px;
padding-top:20px;

@media only screen and (max-width:768px){
   display:none; 
   
}
`;

const Wrapper=styled.div`
height:90%;
display:flex;
justify-content:center;
align-items:center;
background-color:yellow; 

@media only screen and (max-width:768px){
    flex-direction:column;
    height:100%;
    
}


`;
 

const Price = () => {
  return (
    <>
     <Container><h1>Payment Plans</h1></Container>
    <Wrapper  >
     
    <PriceCards price="10" type="Basic"/>
    <PriceCards price="20" type="Premium"/>
    <PriceCards price="30" type="Enterprise"/>
   
    
    </Wrapper></>
    
  )
}

export default Price