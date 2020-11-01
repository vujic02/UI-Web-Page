import styled from 'styled-components';


export const CardContainer = styled.div`
    padding-top: 10%;
    padding-bottom: 10%;
    padding-left: 20%;
    padding-right: 20%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1700px) {
        padding-left: 15%;
        padding-right: 15%;
    }

    @media (max-width: 1400px) {
        padding-left: 10%;
        padding-right: 10%;
    }

    @media (max-width: 1200px) {
        padding-left: 5%;
        padding-right: 5%;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        padding-left: 15%;
        padding-right: 15%;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding-left: 10%;
        padding-right: 10%;
    }

`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({theme}) => theme.bodyReverse};
    color: ${({theme}) => theme.textReverse};
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.02);
        cursor: pointer;
    }
`

export const CardIcon = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
`

export const CardHeading = styled.h1`
    font-size: 2.8rem;
    text-align: center;
    margin-top: 240px;
    margin-bottom: 10px;

    @media (max-width: 480px) {
        font-size: 2.2rem;
    }
`

export const CardH1 = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 60px;

    @media (max-width: 480px) {
        font-size: 2rem;
    }

`

export const CardH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`

export const CardP = styled.p`
    font-size: 1rem;
    margin-bottom: 10px;
`
