import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
import Mars from "./img/Mars.jpg"
import netuno from './img/netuno.jpeg'
import Plutão from './img/Plutão.jpg'
import Jupiter from './img/Jupiter.jpg'


const Wrapper = styled.div`
  margin: 20px 50px 0 20px;
  position:relative;
  
`
const StyledCard = styled(Card)`
  position: relative;
  width: 350px;
  height: 400px;

  @media(max-Width: 600px){
    width: 300px;
    margin:auto
  }
`
const StyledCardActions = styled(CardActions)`
  position: absolute;
  bottom: 0;
`
export default function TripCard(props) {



  const chooseImage = () => {
    switch (props.planet) {
      case 'Marte':
        return Mars
        break
      case 'Netuno':
        return netuno
        break
      case 'Plutão':
        return Plutão
        break
      case 'Jupiter':
        return Jupiter
        break
    }
  }

  return (
    <Wrapper>
      <StyledCard>
        <CardMedia
          component="img"
          alt={props.name}
          height="180"
          image={chooseImage()}
        />
        
        <CardContent >
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {props.planet}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <StyledCardActions>
          <Button size="small">Detalhes</Button>
        </StyledCardActions>
      </StyledCard>
    </Wrapper>
  );
}