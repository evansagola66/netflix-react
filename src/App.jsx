 import styled from "styled-components";
 import Feature from "./components/Feature";
import Intro from "./components/Intro"; 
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
 
 
const Container=styled.div`
       height:100vh;
       overflow:hidden;
       background-color:#f2f2f2;


       
        
`;



   function App() { 
      return(
        <>
        <Container >
          <Navbar />
         <Intro />
        
         </Container >


<Container >
<Feature /> 
</Container >

<Container >
<Service /> 
</Container >

<Container >
<Price /> 
</Container >

<Container >
<Contact /> 
<Footer />
</Container >


        
        </>
           
         
         
 );
     
     }  


export default App;

