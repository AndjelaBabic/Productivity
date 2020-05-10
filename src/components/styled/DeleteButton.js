import styled from "styled-components";
import CardContainer from "./CardContainer.js";
import DeleteIcon from '@material-ui/icons/Delete';

export default styled(DeleteIcon)`
 position: absolute;
 display: none;
 right: 5px;
 bottom: 5px;
 opacity: 0.5;
 ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;