import React from 'react'
import {ReusableSectionContainer, ReusableSectionGrid, Container, ReusableH1, ReusableImg} from './reusable-section-styles.js'
import MediumTextSection from '../Text/Medium/MediumTextSection';
import LargeTextSection from '../Text/Large/LargeTextSection';

const ReusableSection = ({theme, textOne, textTwo, headerOne, btnText, id, textSection, title, img, maxWidth, flexBasis, flexContent, flexDirectionRow, flexDirectionColumn}) => {
    return (
        <ReusableSectionContainer id={id}>
            <ReusableH1>{title}</ReusableH1>
            <ReusableSectionGrid flexContent={flexContent} flexDirectionRow={flexDirectionRow} flexDirectionColumn={flexDirectionColumn}>
                <Container>
                    <ReusableImg src={img} />
                </Container>
                <Container>
                    {(textSection ? 
                            (<MediumTextSection textOne={textOne} textTwo={textTwo} headerOne={headerOne} btnText={btnText} theme={theme} maxWidth={maxWidth} flexBasis={flexBasis} flexContent={flexContent} />) 
                        : 
                            (<LargeTextSection textOne={textOne} textTwo={textTwo} headerOne={headerOne} btnText={btnText} theme={theme} maxWidth={maxWidth} flexBasis={flexBasis} flexContent={flexContent} />))}
                </Container>
            </ReusableSectionGrid>
        </ReusableSectionContainer>
    )
}

export default ReusableSection;
