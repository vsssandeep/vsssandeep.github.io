import React, { useContext, useState } from "react";
import "./Toggle.css";
import { WiDaySunny } from "react-icons/wi";
import { BiMoon } from "react-icons/bi";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [sun, setSun] = useState(false);
  const [moon, setMoon] = useState(true);

  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      {moon&&
        <BiMoon style={{fontSize:'20px'}} onClick={()=>{setSun(true); setMoon(false);}}/>
      }
      {sun &&
        <WiDaySunny style={{fontSize:'20px'}} onClick={()=>{setSun(false); setMoon(true);}}/>
      }
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;