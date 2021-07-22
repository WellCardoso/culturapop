import styled from 'styled-components';

export const Container = styled.span`
    position: fixed;
    padding: 1rem;
    top: 1rem;
    right: 1rem;
    color: white;
    font-size: 2rem;
    color: ${({darkness}) => darkness ? '#fff' : '#000'};
    transition: all ease 300ms;
`