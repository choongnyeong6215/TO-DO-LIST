import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 2rem;
    max-width : 30rem;
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
    color : ${(props) => props.theme.empTextColor};
    margin-top: 2rem;
`;

export const CategoryBox = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
`

export const CategoryBtn = styled.button`
    border : none;
    padding: 0.75rem 1rem;
    border-radius : 1rem;
    background-color : ${(props) => props.theme.boxColor};
    cursor : pointer;
    font-weight: bold;
    color : ${(props) => props.theme.empTextColor};
    &:disabled {
        opacity: 0.5;
        border: 3px solid #E6A4B4;
    }
`;

export const BorderLine = styled.hr`
    margin: 3rem auto;
`

export const ToDoBox = styled.div``;

export const ToDoLabel = styled.label`
    position: relative;
`;

export const ToDoIpt = styled.input`
    border : none;
    padding : 1rem;
    border-radius : 1rem;
    width: 100%;
    padding: 1.5rem;
`;
export const ButtonContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.3rem;
`;

export const ToDoAddBtn = styled.button`
    border : none;
    padding : 1rem;
    border-radius : 1rem;
    background-color : transparent;
    cursor : pointer;
    color : ${(props) => props.theme.empTextColor};
    font-weight: bold;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
`;

export const ErrorMsg = styled.p`
    padding: 1rem;
    color: red;
`;

export const ToDoUpdateBtn = styled.button`
    border : none;
    padding : 0.75rem 0.5rem;
    border-radius : 1rem;
    background-color : ${(props) => props.theme.boxColor};
    cursor : pointer;
    font-size: 0.75rem;
    font-weight: bold;
    color : ${(props) => props.theme.empTextColor};
    margin-right: 0.5rem;
    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

export const ToDoUl = styled.ul`
    display : grid;
    grid-template-columns : repeat(1, 1fr);
    gap : 0.5rem;
    margin-top : 1rem;
    border-radius : 1rem;
`;

export const ToDoLi = styled.div`
    border-radius : 1rem;
    background-color : ${(props) => props.theme.boxColor};
    padding: 1rem;
`;

export const ToDoTxtBox = styled.div`
    padding: 1.5rem 1rem;
    p {
        color: ${(props) => props.theme.textColor};
    }
`;

export const ChgThemeBtn = styled.button`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    border : none;
    position : fixed;
    bottom : 1rem;
    left : 1rem;
    background-color : ${(props) => props.theme.boxColor};
    svg {
        &:first-child {
            fill : ${(props) => props.theme.empTextColor};
        }
    }
`;