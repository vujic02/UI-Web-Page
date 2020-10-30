import React from 'react';
import {  MediumRow,
                MediumColumn,
                MediumHeader,
                MediumText,
                MediumTextSecondary } from './medium-text-styles';

import ButtonPrimary from '../../Buttons/ButtonPrimary'

const MediumTextSection = ({theme, textOne, textTwo, headerOne}) => {
    return (
        <MediumRow>
            <MediumColumn>
                <MediumText>{textOne}</MediumText>
                <MediumHeader>{headerOne}</MediumHeader>
                <MediumTextSecondary>{textTwo}</MediumTextSecondary>
                <ButtonPrimary theme={theme} btnText="Hello"/>
            </MediumColumn>
        </MediumRow>
    )
}

export default MediumTextSection;
