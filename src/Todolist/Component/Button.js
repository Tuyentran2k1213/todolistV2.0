import styled from "styled-components";

const Button = styled.button`
    apperance:none;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: ${props => props.theme.borderButton};
    padding: .25em .5em;
    transition: all .5s;
    font-size:17px;
    margin-left: 0.5rem;
    &:hover {
        color: ${props => props.theme.hoverTextColor};
        background-color:${props => props.theme.hoverBgColor};
        border: ${props => props.theme.borderButton};
    };
`

export default Button;