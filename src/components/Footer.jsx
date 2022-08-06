import React from "react";
import styled from "styled-components";


const Container=styled.div`
  height:10;
  background-color:#111;
  color:darkgrey;
`;

const Wrapper=styled.div`
  padding:20px;
  display:flex;
  justify-content:space-between;
`;

const List=styled.ul`
  padding:0;
  margin:0;
  list-style:none;
  display:flex;
`;

const ListItem=styled.li`
  margin-right:40%;
  cursor:pointer;
`;

const Copyright=styled.span`
 

 
`;

  

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List> <ListItem>Guide </ListItem>
        <ListItem>Support </ListItem>
        <ListItem>Api </ListItem>
        <ListItem>Community </ListItem>
        </List>
       
        <Copyright>Stakweb &copy; 2022</Copyright>
      </Wrapper>
       </Container>
  );
}

export default Footer;