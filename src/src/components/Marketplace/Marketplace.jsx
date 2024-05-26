import React from "react";
import { CardWrapper } from "./assets/CardWrapper";
import { FilterWrapper } from "./FilterWrapper";
import { Typography, Box } from "@mui/material";
import { useQueryCall } from "@ic-reactor/react";

export const Marketplace = () => {
    const { data: tickets, call: getTicketBuffer } = useQueryCall({
    functionName: 'getTicketBuffer',
    onSuccess(data) {
      console.log('Tickets', data)
    }
  });
  return (
    <main>
      <Typography sx={{ padding: "30px", fontSize: '1.6rem' }}>Explore</Typography>
      <p>{tickets ? 'Tickets' :''}</p>
      <Box display="flex">
        <FilterWrapper />

        <CardWrapper tickets={tickets} />
      </Box>
    </main>
  );
};