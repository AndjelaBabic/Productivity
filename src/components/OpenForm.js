import React from "react";
import AddIcon from "@material-ui/icons/Add";
import OpenFormButton from "./styled/OpenFormButton.js"; 

const OpenForm = ({ list, children, openForm }) => {
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"; 

  return (
    <OpenFormButton onClick={openForm} buttonTextBackground={buttonTextBackground} buttonTextColor={buttonTextColor}
    buttonTextOpacity={buttonTextOpacity}>
      <AddIcon></AddIcon>
      <p style={{ flexShrink: 0 }}>{children}</p>
    </OpenFormButton>
  );
};

export default OpenForm;