import React, { Component } from 'react'
import styled from 'styled-components'
import heroImg from '../images/hero1.jpg';

const HeroContainer = styled.div`
background: url(${heroImg});
background-repeat: no-repeat;
background-size: cover;
border-bottom: 5px solid #3f72af;
height: 92vh;

@media screen and (min-width: 1024px) {
    height: 90vh; }
`

const HeroContent = styled.div`  
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
height: 100%;
margin: 0 auto;
text-align: center;
width: 100%;

@media screen and (min-width: 1024px){
    padding: 4em 2em;
    width: 60%;
}
`

const HeroH1 = styled.h1`
background: rgba(156,138,165,.5);
padding: 1em 1em 0.5em;
border-top-right-radius: 25px;
border-top-left-radius: 25px;
color: #112d4e;
line-height: 1.2;
font-size: 2.2em;
margin-bottom: 0;
width: 90%;
`

const HeroH2 = styled.h2`
background: rgba(156,138,165,.5);
padding: 0.5em 1em 1em;
color: #112d4e;
border-bottom-right-radius: 25px;
border-bottom-left-radius: 25px;
margin: 0;
width: 90%;
`

class HeroBanner extends Component {
    render() {
        return (
            <HeroContainer>
                <HeroContent>
                    <HeroH1>I'm {this.props.name}, a Front-end Web Developer</HeroH1>
                    <HeroH2>Building Responsive Websites and Applications</HeroH2>
                </HeroContent>
            </HeroContainer>
        )
    }
}

export default HeroBanner;
