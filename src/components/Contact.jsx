import React from 'react'
import styled from 'styled-components'
 
import { Button }  from "react-bootstrap";
 

const Container=styled.div`
 height:90%;
 background:navy;
`;

const myButtonStyle5 = {
  color:'white',
  fontWeight:'bold',
  backgroundColor:'darkblue',
  padding:'12px 10px',   
   cursor:'pointer',
   border: '2px solid white', 
   borderRadius:10,
     width:200,
     fontSize: 13,
     transform:'.3s ease-out',
     textTransform: 'uppercase',
     letterSpacing: 2,

     
    
 }



const Wrapper=styled.div`
 height:100%;
 padding:0 20px 0 20px;
 display:flex;
 align-items:center;
 justify-content:center;
 right:0;

`;

const FormContainer=styled.div`
 width:50%;

`;

const Text=styled.span`
 width:50%;
 opacity:0.8;
 margin-right:20px;

`;

const Title=styled.h1`
 opacity:0.8;
 font-size:30px;
 padding:20px;
 margin:;
 font-weight:bold;

`;

const Title2=styled.h1`
 opacity:0.8;
 font-size:30px;
 padding:0 20 20 20;
 margin-bottom:20px;
 font-weight:bold;

`;

const AddressContainer=styled.div`
 padding-left:60px;
width:50%;
 
`; 

const AddressItem=styled.div`
 
 margin-bottom:50px;
`; 



const Form=styled.form`
 
height:250px;
display:flex;
align-items:center;
justify-content:center;

`;

const LeftForm=styled.div`
 height:100%;
 display:flex;
 margin-right:20px;
 flex-direction:column;
 justify-content:space-between;
 
`;

const RightForm=styled.div`
height:100%;
display:flex;
flex-direction:column;
 justify-content:space-between;  
width:50%;

`;

const Input=styled.input`
 padding:20px;
width:200px;
border:1px solid gray;
outline:0;
`;

const TextArea=styled.textarea`
 height:76%;
 padding:20px;
width:50%;
resize:none;
width:200px;
border:1px solid gray;
outline:0;
`;

export const Contact = () => {
  return (
    <Container>
        
        <Wrapper>
            <FormContainer> 
            <Title>Contact us</Title>
            <Form>
           
              <LeftForm>
             
                <Input style={{borderRadius:10}} placeholder="Your Name" required/>
                <Input style={{borderRadius:10}} placeholder="Your Email" required/>
                <Input style={{borderRadius:10}} placeholder="Your Subject" required/>
              </LeftForm>
              <RightForm>
                <TextArea style={{borderRadius:10}} placeholder="Message" required/>
                <Button  style={myButtonStyle5}>Send</Button>
                </RightForm>
               
            </Form>
                </FormContainer>
                
            <AddressContainer>
            <Title2>Address</Title2>
               <AddressItem>
                   <Text>123 Park Avenue</Text> 
                </AddressItem> 
                <AddressItem>
                   <Text>0800 987 878 986,</Text> 
                   <Text>0800 567 876 347</Text> 
                </AddressItem> 
                <AddressItem>
                   <Text>admin@agency.com,</Text> 
                   <Text>sales@agency.com</Text> 
                </AddressItem> 
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact;