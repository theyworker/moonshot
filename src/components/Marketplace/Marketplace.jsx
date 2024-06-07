import React from 'react';
import { CardWrapper } from './CardWrapper';
import { FilterWrapper } from './FilterWrapper';
import { Typography, Box } from '@mui/material';
import { useQueryCall } from '@ic-reactor/react';

export const Marketplace = () => {
  console.log('MarketPlace: Starting');

  const { data: tickets, call: getTicketBuffer } = useQueryCall({
    functionName: 'getTicketBuffer',
    // onSuccess(data) {
    //   console.log('Tickets', data)
    // }
    onSuccess: (data) => {
      console.log('MarketPlace: Ticket data:', data);
    },
    onError: (e) => {
      console.log('MarketPlace: Error creating ticket:', e);
    },
  });
  return (
    <main>
      <Typography sx={{ padding: '30px', fontSize: '1.6rem' }}>
        Explore
      </Typography>
      <p>{tickets ? 'Tickets' : ''}</p>
      <Box display="flex">
        <FilterWrapper />

        <CardWrapper tickets={tickets} />
      </Box>
    </main>
  );
};
