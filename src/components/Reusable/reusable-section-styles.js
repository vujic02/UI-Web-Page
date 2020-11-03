import styled from 'styled-components';

export const ReusableSectionContainer = styled.div`
    list-style: none;
    margin-bottom: 15%;
    @media (max-width: 1200px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`

export const ReusableSectionGrid = styled.div`
    padding-left: 5%;
    display: flex;
    flex-direction: ${ ({flexDirectionRow}) => (flexDirectionRow ? "row" : "row-reverse")};
    justify-content: space-around;
    @media (max-width: 1200px) {
        padding-left: 0;
        flex-direction: ${ ({flexDirectionColumn}) => (flexDirectionColumn ? "column" : "column-reverse")};
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const ReusableH1 = styled.h1`
    margin: 5% 0 0 0;
    text-align: center;
    font-size: 2.8rem;
    @media (max-width: 428px) {
        font-size: 2.2rem;
    }
`

export const ReusableImg = styled.img`
    padding-top: 80px;
    max-width: 600px;
    width: 600px;
    height: 600px;
    @media screen and (max-width: 768px) {
        width: 400px;
        height: 400px;
    }

    @media screen and (max-width: 428px) {
        width: 300px;
        height: 300px;
    }
`