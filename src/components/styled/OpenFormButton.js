import styled from "styled-components";

export default styled.div`
display: flex;
align-items: center;
cursor: pointer;
border-radius: 3px;
height: 36px;
margin-left: 8px;
width: 300px;
padding-left: 10px;
padding-right: 10px;
opacity: ${props => props.buttonTextOpacity};
color: ${props => props.buttonTextColor};
background-color: ${props => props.buttonTextBackground};
`;