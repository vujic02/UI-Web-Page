import styled from 'styled-components';

const LargeRow = styled.div`
    padding: 15% 0 15% 8%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    font-family: 'Oswald', sans-serif;
    @media screen and (max-width: 768px) {
        padding: 20% 0 15% 5%;
    }
`

const LargeColumn = styled.div`
   flex: 1;
   max-width: 50%;
   flex-basis: 50%;
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
`


const LargeText = styled.p`
    font-size: 2.5rem;
    margin: 0;
    font-weight: 900;
    text-transform: uppercase;
    color: ${({theme}) => theme.textSecondary};
`

const LargeTextSecondary = styled.p`
    font-size: 18px;
    margin: 0 20px 20px 0;
    font-weight: 400;
`



export {
    LargeRow,
    LargeColumn,
    LargeHeader,
    LargeTextSecondary,
    LargeText
}
