import React from 'react';

import {  LargeRow,
    LargeColumn,
    LargeHeader,
    LargeText,
    LargeTextSecondary } from './large-text-styles';

import ButtonSecondary from '../../Buttons/ButtonSecondary'

const LargeTextSection = ({theme, textOne, textTwo, headerOne, btnText, flexBasis, maxWidth, flexContent}) => {
    return (
        <LargeRow flexContent={flexContent}>
            <LargeColumn flexBasis={flexBasis} maxWidth={maxWidth} >
                <LargeText>{textOne}</LargeText>
                <LargeHeader>{headerOne}</LargeHeader>
                <LargeTextSecondary>{textTwo}</LargeTextSecondary>
                <ButtonSecondary theme={theme} btnText={btnText} />
            </LargeColumn>
        </LargeRow>
    )
}

export default LargeTextSection;
