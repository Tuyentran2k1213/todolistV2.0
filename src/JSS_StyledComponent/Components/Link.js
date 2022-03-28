import styled from "styled-components";

export const Link = ({ className, children, ...props}) => (
    <a {...props} className={className}>
        {children}
    </a>
)

export const StyledLink = styled(Link)`
    font-size: 2rem;
    color: red;
`