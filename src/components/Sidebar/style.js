import styled from 'styled-components';

export const Container = styled.div`
    width: 3.5rem;
    height: 100vh;
    background-color: #171717;
    z-index: 1111;

    aside {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        float: right;
        padding: 1rem;
        height: 3rem;
        color: white;

        span {
            font-size: 1.5rem;
        }
    }
`


export const Text = styled.p`
    color: white;
`