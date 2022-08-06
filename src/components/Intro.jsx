 
import React from "react"; 
 import { Button }  from "react-bootstrap";
import styled from "styled-components";
import Woman from '../images/cute.svg';
 
 

 const Container=styled.div`
     height:calc(100vh - 60px);
     display:flex;
     background:cyan;
     padding:0 20px;
           
     @media only screen and (max-width:768px){
    height:max-content;
      flex-direction:column;
    }
 `;

 const Left=styled.div`
 width:50%;
 display:flex;
 background-color:;   
 flex-direction:column; 
 align-items:center;   
 justify-content:center;
   

 @media only screen and (max-width:768px){
  width:100%;
  height:calc(100vh - 60px);
 
 }
`;

const Right=styled.div`
 
width:50%;
margin:auto;    

@media only screen and (max-width:768px){
 
 display:none;
  
 
 }
`;

const Title= styled.h1`
font-size:bold;
font-size:35px;
opacity:0.8;
width:80%;


@media only screen and (max-width:768px){
    
  flex-direction:column;
}

`;

const Desc= styled.p`
font-size:20px;
opacity:0.9;
width:80%;
margin-top:20px;
 line-height:1.5;

 @media only screen and (max-width:620px){
     
 
  
}
`;

const Info= styled.div`
 
width:80%;
margin-top:40px;
display:flex;

align-items:center;
justify-content:space-between;

@media only screen and (max-width:860px){
     
   
}
`;

const Contact= styled.div`
    display:flex;
    flex-direction:column;


    
    @media only screen and (max-width:860px){
       
      
      
    }
 
`;
const Phone= styled.span`
 color:#f0667d;
 font-weight:bold;
 margin-bottom:2px;

 @media only screen and (max-width:786px){
     
  margin-bottom:;
   display:none;
}
`;
const ContactText= styled.span`
color:grey;
 
@media only screen and (max-width:786px){
     
  margin-bottom:;
   display:none;
}
`;

const myButtonStyle = {
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
     marginTop:5
 }



 const Image=styled.img`
     width:80%;
     display:flex;
     background-color:;
     padding:0 20px;
           
    
 `;
  

  
 


 
const Intro = () => {
  return (
    <Container>
        
        <Left> 
            <Title>Adventures in creative age</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione non voluptatum dolorem cumque commodi vel moloiu numquam rerum voluptate!</Desc> 

        <Info>
        <Button style={ myButtonStyle}>Start a Project</Button>
              <Contact>
              
              <Phone>Call Us (012) 345-6789</Phone> 
              <ContactText>For any question or concern</ContactText>
              </Contact>
              
              
        </Info>
        
        </Left>
        <Right><Image src={Woman}></Image> </Right>
        
        </Container>
  );
}

export default Intro