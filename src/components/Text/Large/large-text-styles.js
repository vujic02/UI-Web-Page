import styled from 'styled-components';

const LargeRow = styled.div`
    padding: 100px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${({flexContent}) => flexContent};
    font-family: 'Oswald', sans-serif;

    @media screen and (max-width: 768px) {
        justify-content: center;
        padding: 100px 50px;
    }

    @media screen and (max-width: 428px) {
        padding: 150px 25px;
    }
`

const LargeColumn = styled.div`
    flex: 1;
    max-width: ${({maxWidth}) => (maxWidth ? '100%' : '50%')};
    flex-basis: ${({flexBasis}) => (flexBasis ? '100%' : '50%')};

   @media (max-width: 1200px) {
        max-width: 90%;
        flex-basis: 90%;
   }

   @media (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
   }
`

const LargeHeader = styled.h1`
    font-size: 4.2rem;
    font-weight: 700;
    margin: 0 15px 15px 0;
    font-family: 'Oswald', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 3.8rem;
    }

    @media screen and (max-width: 428px) {
        font-size: 3.2rem;
    }

    @media screen and (max-width: 350px) {
        font-size: 2.6rem;
    }
`


const LargeText = styled.p`
    font-size: 18px;
    margin: 0 20px 20px 0;
    color: ${({theme}) => theme.textSecondary};
    font-weight: 700;
`

const LargeTextSecondary = styled.p`
   font-size: 18px;
    margin: 0 20px 20px 0;
    font-weight: 400;
`

const LargeTextWrapper = styled.div`
    padding: 5% 5%;
`



export {
    LargeRow,
    LargeColumn,
    LargeHeader,
    LargeTextSecondary,
    LargeText,
    LargeTextWrapper
}
