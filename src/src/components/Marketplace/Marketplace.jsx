import React from "react";
import { CardWrapper } from "./assets/CardWrapper";
import { FilterWrapper } from "./FilterWrapper";
import { Typography, Box } from "@mui/material";

export const Marketplace = () => {
  return (
    <main>
      <Typography sx={{ padding: "30px", fontSize: '1.6rem' }}>Explore</Typography>
      <Box display="flex">
        <FilterWrapper />

        <CardWrapper />
      </Box>
    </main>
  );
};