 import React from "react";
 import styled from "styled-components";
  
 
 

 const Container = styled.div`
     height:60px;
     
     background-color:;
      
 `;

  
 
 const Wrapper = styled.div`
 padding:10px 20px;
 display:flex;
 justify-content:space-between;
      
 `;

 const Left = styled.div`
 width:60%;
    display:flex;
    align-items:center;
    justify-content:space-between;  
 `;

 const Logo = styled.h1`
 color:;
 font-weight:bold;
 
 text-decoration:underline crimson;   
 font-size:20px;  
 `;

 const Menu = styled.ul`
 display:flex;
 align-items:center;
 justify-content:space-between; 
  
 @media only screen and (max-width:768px){
  display:none;
 }
 `;
 const MenuItem = styled.li`
  list-style:none;
  margin-right:30px;
  font-size:15px;
  font-weight:bold;
  color:darkgrey;
  cursor:pointer;
 
      
 `;

 const Button = styled.button`
 border:2px solid white;
 padding: 12px 32px;
 background-color:crimson;
 color:white;
 border-radius:10px;
 font-weight:bold;
 cursor: pointer;
 margin-top:;  
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing:2px;
  
} 

@media only screen and (max-width:620px){
  font-size: 12px;
  padding:12px 10px;
 }
      
 `;

  
 const Navbar = () => {
   return (
     <Container> 
      
        <Wrapper> 
      
            <Left>
            <Logo style={{cursor:'pointer'}}>Agency</Logo>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem> Contact</MenuItem>
            </Menu>

            
        
                </Left> 
        
                <Button>JOIN TODAY</Button>
             
        </Wrapper>
        </Container>
   )
 };
 
 export default Navbar