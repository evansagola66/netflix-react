import React from 'react';
import styled from 'styled-components';
import Svg from '../images/online.svg';
import { Button }  from "react-bootstrap";

const Container=styled.div`
   padding:0px 20px 0 20px; 
  display:flex;
  height:;
  background:pink;
  min-height:100vh;


  @media only screen and (max-width:620px){
     
    

  }
   
`;

const Left=styled.div`
    width:50%;

    @media only screen and (max-width:786px){
     
      
       display:none;
    }
`;

const Right=styled.div`
      width:50%;
      display:flex;
      flex-direction:column;
      
      @media only screen and (max-width:786px){
        width:100%;
        height:max-content;
      }
`;

const Image=styled.img`
    width:80%;
    padding-top:20px;
    padding-left:40px;
`;
const Title=styled.span`
display:flex;
    flex-direction:column;
    margin:10px 0;
    font-size:30px;
    
`;

const SubTitle=styled.h1`
margin:10px 0;
font-size:20px;
opacity:0.9;
`;

const Desc=styled.p`
line-height:1.5;
font-size:20px;
margin:0 0 20px 0;
opacity:0.9;
`;
const Space=styled.span`
  margin:10px 0;
 
`;


const myButtonStyle2 = {
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
     marginTop:5,
    
     width:200
     
 }

const Feature = () => {
  return (
    <Container>
        <Left>
            <Image src={Svg}></Image>
        </Left>

        <Right>
          <Title>
            <Space style={{opacity:0.8}}><b>Good</b> design</Space> 
            <Space style={{opacity:0.8}}><b>Good</b> business</Space> 
          </Title>
          <SubTitle style={{opacity:0.9}}><b style={{fontWeight:500}}><em>Lorem ipsum dolor sit amet, consectetur adipisicing</em></b></SubTitle>
          <Desc style={{opacity:0.9, }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam corrupti ipsam ab libero eum ducimus nemo ullam blanditiis quos temporibus?</Desc>

          <Desc style={{opacity:0.9}}>Lorem ipsum dolor, sit amet consectetur adipisicing </Desc>
          <Button style={myButtonStyle2}>Learn More</Button>
        </Right>
    </Container>
  )
}

export default Feature