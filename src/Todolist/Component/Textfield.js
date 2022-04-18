import styled from "styled-components";
import { createRef , useEffect } from "react";



const Input = styled.input`
    border: 1px solid ${props => props.theme.color};
    color: ${props => props.theme.textColor};
    min-height:35px;
    height:35px;
    font-size:17px;
    width:auto;
    display:initial;
`

const Label = styled.span`
    color:${props => props.theme.color};
    width:auto;

`



const TextField = ({ label, ...props }) => {
    const myref = createRef();
    return <span>
        <Label>
            {label}
        </Label><br/>
        <Input ref={myref} {...props} />
    </span>
}

export default TextField;