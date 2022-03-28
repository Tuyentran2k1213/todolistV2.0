import styled from "styled-components";

const Heading = styled.h3`
    font-size:2rem;
    font-weight:300;
    line-height:1.2;
    color: ${props => {return props.theme.color}}
`

export default Heading;