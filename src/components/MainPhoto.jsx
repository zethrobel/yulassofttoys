import React from "react";
import {
    Card,
    CardBody,
    CardGroup,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardDeck,
    CardFooter,
    CardHeader,
    CardImgOverlay,
    CardLink,
    CardText,
    Container,
    Row,
    Col
} from "reactstrap";
import { peach,panda,gray,brown,white,pink } from "../mainPhotos";
function MainPhoto(props) {
    return (
        <div>
          
      <Container >  
      <CardGroup >
       
      {panda.map((card, index) => ( 
        <Card key={index} className="cardMargin" > 
          
          <CardImg 
            alt={card.type} 
            src={card.src} 
            className="cards" 
             
          /> 
          
          <CardBody className="cardTitle"> 
            <CardTitle tag="h5">Type: {card.type} Teddy Bear</CardTitle> 
            <CardSubtitle className="mb-2 text-muted" tag="h6">Size: {card.size}</CardSubtitle> 
            
             
          </CardBody> 
        </Card> 
      ))} 
      </CardGroup>
      </Container> 
       <Container >  
      <CardGroup >
       
      {gray.map((card, index) => ( 
        <Card key={index} className="cardMargin" > 
          
          <CardImg 
            alt={card.type} 
            src={card.src} 
            className="cards" 
             
          /> 
          
          <CardBody className="cardTitle"> 
            <CardTitle tag="h5">Type: {card.type} Teddy Bear</CardTitle> 
            <CardSubtitle className="mb-2 text-muted" tag="h6">Size: {card.size}</CardSubtitle> 
            
             
          </CardBody> 
        </Card> 
      ))} 
      </CardGroup>
      </Container> 
       <Container >  
      <CardGroup >
       
      {brown.map((card, index) => ( 
        <Card key={index} className="cardMargin" > 
          
          <CardImg 
            alt={card.type} 
            src={card.src} 
            className="cards" 
             
          /> 
          
          <CardBody className="cardTitle"> 
            <CardTitle tag="h5">Type: {card.type} Teddy Bear</CardTitle> 
            <CardSubtitle className="mb-2 text-muted" tag="h6">Size: {card.size}</CardSubtitle> 
            
             
          </CardBody> 
        </Card> 
      ))} 
      </CardGroup>
      </Container> 
       <Container >  
      <CardGroup >
       
      {peach.map((card, index) => ( 
        <Card key={index} className="cardMargin" > 
          
          <CardImg 
            alt={card.type} 
            src={card.src} 
            className="cards" 
             
          /> 
          
          <CardBody className="cardTitle"> 
            <CardTitle tag="h5">Type: {card.type} Teddy Bear</CardTitle> 
            <CardSubtitle className="mb-2 text-muted" tag="h6">Size: {card.size}</CardSubtitle> 
            
             
          </CardBody> 
        </Card> 
      ))} 
      </CardGroup>
      </Container> 

       <Container >  
      <CardGroup >
       
      {pink.map((card, index) => ( 
        <Card key={index} className="cardMargin" > 
          
          <CardImg 
            alt={card.type} 
            src={card.src} 
            className="cards" 
             
          /> 
          
          <CardBody className="cardTitle"> 
            <CardTitle tag="h5">Type: {card.type} Teddy Bear</CardTitle> 
            <CardSubtitle className="mb-2 text-muted" tag="h6">Size: {card.size}</CardSubtitle> 
            
             
          </CardBody> 
        </Card> 
      ))} 
      </CardGroup>
      </Container> 
     
      <Container >  
      <CardGroup >
       
      {white.map((card, index) => ( 
        <Card key={index} className="cardMargin" > 
          
          <CardImg 
            alt={card.type} 
            src={card.src} 
            className="cards" 
             
          /> 
          
          <CardBody className="cardTitle"> 
            <CardTitle tag="h5">Type: {card.type} Teddy Bear</CardTitle> 
            <CardSubtitle className="mb-2 text-muted" tag="h6">Size: {card.size}</CardSubtitle> 
            
             
          </CardBody> 
        </Card> 
      ))} 
      </CardGroup>
      </Container> 
     
        </div>
    )
}

export default MainPhoto