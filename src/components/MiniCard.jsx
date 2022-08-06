import React from 'react';
import styled from 'styled-components';
import Icon from '../images/ico.png';
 

const Container=styled.div`
width:100px;
padding:5px 40px 5px 40px;
display:flex;
flex-direction:column;
align-items:center;
-webkit-box-shadow: 0px 0px 25px -11px rgba(0, 0, 0, 0.58);
box-shadow:  0px 0px 25px -11px rgba(0, 0, 0, 0.58);

@media only screen and (max-width:620px){
     
  display:flex;

}
`;

const Image=styled.img`
    width:20px;
    border-radius:5px;
 
`;

const Text=styled.span`
 margin-top:10;   

text-align:center;
line-height:1.5;
`;


  

const MiniCard = () => {
  return (
    <Container>
        <Image src={Icon}></Image>
        <Text style={{opacity:0.8, padding:0}}>Lorem ipsum  consectetur adipisicing  </Text>
    </Container>
  )
}

export default MiniCard