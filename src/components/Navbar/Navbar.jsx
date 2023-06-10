import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import { SearchBar } from "../SearchBar";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        display: "flex",
        gap: "8px",
      }}
    >
        <img src={logo} alt="logo" height={45} />
        <h3 style={{ color: "white" , fontFamily: "cursive" }}>Looky</h3>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
