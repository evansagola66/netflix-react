import React from 'react';
import styled from 'styled-components';
import { Button }  from "react-bootstrap";

const Container=styled.div`
padding:15px;
-webkit-box-shadow: 0px 0px 25px -11px rgba(0, 0, 0, 0.58);
box-shadow:  0px 0px 25px -11px rgba(0, 0, 0, 0.58);
border-radius:10px;
display:flex;

 

align-items:center;

@media only screen and (max-width:768px){
     
  


}
`;

const PriceContainer=styled.div`
display:flex;
flex-direction:column; 
align-items:center;
text-align:center;

@media only screen and (max-width:620px){
     
 

}
`;

const List=styled.div`

`;

const ListItem=styled.div`
 text-align:center;
 font-size:20px;
`;

const Price=styled.span`
 
`;

const Type=styled.button`
align-self:center;
display:flex;
flex-direction:column;
 border-radius:20px;
font-size:20px;
border:1px solid crimson;
color:crimson;
margin:auto;
background-color:white;
`;

const Span=styled.span`
  font-size:40px;
  font-weight:bold;
`;

const myButtonStyle4 = {
  color:'white',
  fontWeight:'bold',
  backgroundColor:'darkblue',
  padding:'12px 10px',   
   cursor:'pointer',
   border: '2px solid white', 
   borderRadius:10,
     textTransform: 'uppercase',
     fontSize: 13,
     letterSpacing: 2,
     lineHeight: 1,
     marginTop:0
 }

const PriceCards = ({price, type}) => {
  return (
    <Container style={{margin:16}} >
      <PriceContainer>
       
        <List  style={{padding:20}}>
        $<Price style={{padding:10}}><Span>{price}</Span></Price>/month
        
        <Type >{type}</Type>
          <ListItem style={{padding:5}}>20 Hand-Crafted Templates</ListItem>  
          <ListItem style={{padding:5}}>Exclusive Support</ListItem> 
          <ListItem style={{padding:5}}>50+ Prebuilt Websites</ListItem> 
          <ListItem style={{padding:5}}>Premium Plugins</ListItem> 
        </List>
        <Button style={myButtonStyle4}>Buy Now</Button>
      </PriceContainer>
    </Container>
  )
}

export default PriceCards