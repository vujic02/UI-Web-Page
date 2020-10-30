import React from 'react'
import {HeroSectionGrid, Container} from './hero-styles.js'
import CollabSvg from '../../svgs/Collaboration'
import MediumTextSection from '../Text/Medium/MediumTextSection';

const textOne = "Exquisite Content";
const textTwo = "We are a company based in Dubai, company of sheer focus, commitment, and is full of people working for the same goal. Our goal is to make people happy. Sign up now, first week is on us!";
const headerOne = "West side company D.O.O";

const AboutSection = ({theme}) => {
    return (
        <HeroSectionGrid id="about">
            <Container>
                <CollabSvg className="collab-svg"/>
            </Container>
            <Container>
                <MediumTextSection textOne={textOne} textTwo={textTwo} headerOne={headerOne} theme={theme}/>
            </Container>
        </HeroSectionGrid>
    )
}

export default AboutSection;
