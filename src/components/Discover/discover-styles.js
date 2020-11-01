import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
    list-style: none;
    @media (max-width: 1200px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`

export const DiscoverContainer = styled.div`
    padding-left: 5%;
    display: flex;
    flex-direction: row;
    .discover-svg {
        padding-left: 10%
    }
    @media (max-width: 1200px) {
        padding-left: 0;
        flex-direction: column;
        .discover-svg {
            width: 600px;
            height: 600px;
        }
    }

    @media (max-width: 768px) {
        .collab-svg {
            width: 500px;
            height: 500px;
        }

        .discover-svg {
        width: 500px;
        height: 500px;
        }
    }

    @media (max-width: 428px) {
        .collab-svg {
            width: 400px;
            height: 400px;
        }

        .discover-svg {
        width: 400px;
        height: 400px;
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const DiscoverH1 = styled.h1`
    margin: 5% 0 0 0;
    text-align: center;
    font-size: 2.8rem;
    @media (max-width: 428px) {
        font-size: 2.2rem;
    }
`