import styled from 'styled-components'



const MediumRow = styled.div`
    padding: 100px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        justify-content: center;
        padding: 100px 50px;
    }

    @media screen and (max-width: 428px) {
        padding: 100px 25px;
    }
`

const MediumColumn = styled.div`
   flex: 1;
   max-width: 70%;
   flex-basis: 70%;
   @media (max-width: 1200px) {
        max-width: 90%;
       flex-basis: 90%;
   }
   @media (max-width: 768px) {
       max-width: 100%;
       flex-basis: 100%;
   }
`

const MediumHeader = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin: 0 15px 15px 0;
    font-family: 'Oswald', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

`


const MediumText = styled.p`
    font-size: 16px;
    margin: 0 20px 20px 0;
    color: ${({theme}) => theme.textSecondary};
    font-weight: 400;
`

const MediumTextSecondary = styled.p`
    font-size: 18px;
    margin: 0 20px 20px 0;
    font-weight: 400;
`



export {
    MediumRow,
    MediumColumn,
    MediumHeader,
    MediumTextSecondary,
    MediumText
}
