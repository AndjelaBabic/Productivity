import styled from "styled-components";
import CardContainer from "./CardContainer.js";
import EditIcon from '@material-ui/icons/Edit';

export default  styled(EditIcon)`
position: absolute;
display: none;
right: 5px;
top: 5px;
opacity: 0.5;
${CardContainer}:hover & {
  display: block;
  cursor: pointer;
}
&:hover {
  opacity: 0.8;
}
`;
