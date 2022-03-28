import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.primary ? 'blue' : 'linear-gradient(red, blue)'};
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    padding: 1rem;
    opacity: 1;
    font-size: ${props => props.fontSizex2 ? '2rem' : '1rem'};
    cursor: pointer;
        &:hover{
            opacity: 0.7;
            transition: all .1s;
        }
        &.btn-style{
            font-size: 30px;
        }
`

export const Btn = styled(Button)`
font-size: 0.5rem;
background-color: orange;
`