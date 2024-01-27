import styled from "styled-components";

export const Container = styled.div`
    max-width : 500px;
    margin : 0 auto;
`;

export const Header = styled.header`
    height : 20vh;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const Title = styled.h1`
    font-size : 3rem;
`;

export const ToDoBox = styled.div`
    margin-top : 2rem;
`;

export const ToDoIpt = styled.input`
    border : none;
    padding : 1rem;
    border-radius : 1rem;
    width : 80%;
`;

export const ToDoAddBtn = styled.button`
    border : none;
    padding : 1rem;
    border-radius : 1rem;
    background-color : ${(props) => props.theme.boxColor};
    cursor : pointer;
    color : ${(props) => props.theme.textColor};;
`;

export const ToDoUl = styled.ul`
    display : grid;
    grid-template-columns : repeat(1, 1fr);
    gap : 0.5rem;
    margin-top : 1rem;
    border-radius : 1rem;
`;

export const ToDoLi = styled.li`
    border-radius : 1rem;
`