import styled from "styled-components";

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    aligh-item: center;
    text-align: center;
    margin: 0 0 30px 0;
    padding: 40px;
    border: 4px solid #4481eb);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
    min-height: 30px;
    width: 100%;
    border-radius: 25px;
    color: ${props => (props.gameOver ? '#a41d1d' : '#999')};
    background: #000;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
`