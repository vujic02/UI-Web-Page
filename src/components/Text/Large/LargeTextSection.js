import React from 'react';

import {  LargeRow,
    LargeColumn,
    LargeHeader,
    LargeText,
    LargeTextSecondary } from './large-text-styles';

import ButtonSecondary from '../../Buttons/ButtonSecondary'

const LargeTextSection = ({theme, textOne, textTwo, headerOne}) => {
    return (
        <LargeRow>
            <LargeColumn>
                <LargeText>{textOne}</LargeText>
                <LargeHeader>{headerOne}</LargeHeader>
                <LargeTextSecondary>{textTwo}</LargeTextSecondary>
                <ButtonSecondary theme={theme} btnText="Sign up"/>
            </LargeColumn>
        </LargeRow>
    )
}

export default LargeTextSection
