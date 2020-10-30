import React from 'react';
import {
    CardContainer,
    Card,
    CardIcon,
    CardHeading,
    CardH2,
    CardP
} from './card-styles'

import Icon1 from './Icons/Icon1.svg';
import Icon2 from './Icons/Icon2.svg';
import Icon3 from './Icons/Icon3.svg';


const CardSection = ({theme}) => {
    return (
        <div id="services">
        <CardHeading>SERVICES</CardHeading>
        <CardContainer>
            <Card>
                <CardIcon src={Icon1}/>
                <CardH2>Downloadable Content</CardH2>
                <CardP>You can easily download stock pictures, videos after signing up. We have a team of professional photographers.</CardP>
            </Card>
            <Card>
                <CardIcon src={Icon2}/>
                <CardH2>Readable Code</CardH2>
                <CardP>Our team of developers make the code clear so you can use it in your projects without any difficulties!</CardP>
            </Card>
            <Card>
                <CardIcon src={Icon3}/>
                <CardH2>A Lot Of Users</CardH2>
                <CardP>Our services provide you to chat to same-like minded people, people that love web development as much as you do.</CardP>
            </Card>
        </CardContainer>
        </div>
    )
}

export default CardSection
