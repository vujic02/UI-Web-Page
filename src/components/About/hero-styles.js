import styled from 'styled-components';

export const HeroSectionGrid = styled.div`
    margin-top: 15%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 2%;
    margin-right: 2%;
    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
        .collab-svg {
            width: 400px;
            height: 400px;
        }
    }

    @media (max-width: 428px) {
        margin-left: 1%;
        margin-right: 1%;
        .collab-svg {
            width: 300px;
            height: 300px;
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
`