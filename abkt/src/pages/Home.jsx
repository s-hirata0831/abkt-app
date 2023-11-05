import React from "react";
import HModule from "../styles/Home.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import titleLogo from "../assets/brain_logo.png";
import { useState } from "react";
export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <StyledEngineProvider>
        <CssBaseline />
        <div className={HModule.icon_around}>
          <img src={titleLogo} className={HModule.icon_around} alt="title" />
        </div>
        <p className={HModule.title}>アイデア足りてる？</p>
        <div className={HModule.go_down}>
          <ExpandMoreIcon />
        </div>
      </StyledEngineProvider>
    </>
  );
};
