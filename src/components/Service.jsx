import React, {useState} from 'react';
import styled from 'styled-components';
import Svg from '../images/service.svg';
import MiniCard from './MiniCard';
import { Button }  from "react-bootstrap";
import Play from '../images/play.png';
 


const Container=styled.div`
 display:flex;
 min-height:100vh;
 background:violet;
 padding:0px 20px 0px 20px; 
 @media only screen and (max-width:620px){
     
  flex-direction: ;
   padding-bottom:0;
}

 
`;

const Left=styled.div`
width:50%;
position:relative;

@media only screen and (max-width:620px){
     
  display:none;

}
`;

const Right=styled.div`
width:50%;

 @media only screen and (max-width:620px){
     
  width:100%;

}
`;

const Image=styled.img`
  display: ${(props) => props.open && "none"};
    width:70%;
    padding-top:90px;
    padding-left:30px;
`;

const Wrapper=styled.div`
padding-top:50px;
display:flex;
flex-direction:column;

@media only screen and (max-width:620px){
     padding:20px;
     width:100%;
     display:flex;
flex-direction:;
     

}
`;

const Title=styled.h1`

`;

const Video=styled.video`
display: ${(props) => !props.open && "none"};
-webkit-box-shadow: 0px 0px 30px -11px rgba(0, 0, 0, 0.58);
box-shadow:  0px 0px 30px -11px rgba(0, 0, 0, 0.58);
height:200px;
border-radius:10px;
position:absolute;
top:0;
bottom:0;
right:0;
margin:auto;
margin-right:20%;

`;


const PlayButton=styled.img`
width:30px;
height:25px;
margin-right:20px;
margin-left:10px;
border-radius:10px;
 
`;

const Desc=styled.p`
font-size:20px;
`;

const CardContainer=styled.div`
   display:flex;
   justify-content:space-between;
   margin:30px 0 30px 0; 

   @media only screen and (max-width:620px){
     
    
    
  
  }

  @media only screen and (max-width:380px){
    
  
  }
`;

const myButtonStyle3 = {
  color:'white',
  fontWeight:'bold',
  backgroundColor:'darkblue',
  padding:'8px 10px',   
   cursor:'pointer',
   border: '2px solid white', 
   borderRadius:10,
     textTransform: 'uppercase',
     fontSize: 13,
     letterSpacing: 2,
     lineHeight: 1,
     marginTop:5,
    display:'flex',
    alignItems:'center',
     width:200
     

     
 }

 



const Service = () => {
  const [open,setOpen]=useState(false);
  return (
    <Container>
        <Left><Image src={Svg} open={open}></Image>
        <Video  open={open} autoPlay muted loop controls src="./videos/naija.mp4"/>
        </Left>
        <Right>
          <Wrapper>
            <Title style={{opacity:0.8, marginBottom:20, marginTop:0}}>Lorem ipsum dolor ctetur.</Title>
            <Desc style={{opacity:0.8, lineHeight:2}}>Lore ipsum dolor sit amet consectetur adipisicing elit. Unde, earum perferendis inventore ex quas quasi sectetur adipisicing elit. Unde, earum perferendis inv.</Desc>
            <CardContainer>
              <MiniCard />
              <MiniCard />
              <MiniCard />
            </CardContainer>
            <Button onClick={(e)=>setOpen(true)} style={myButtonStyle3}><PlayButton src={Play}></PlayButton>How it works </Button>
            </Wrapper> 
          </Right>
        </Container>
  ); 
}

export default Service