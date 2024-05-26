import React from 'react';
import { Typography, Button, OutlinedInput, InputLabel } from '@mui/material';
import { Filter } from '../Marketplace/Filter';
import { DateFilter } from '../Marketplace/DateFilter';
import { UploadFile } from './UploadFile';

export const SellTicket = () => {
  return (
    <div>
      <Typography sx={{ padding: "30px", fontSize: '1.6rem' }}>Sell Tickets</Typography>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '20px'}}>      
    <div style={{padding: '20px'}}> 
      <form noValidate autoComplete="off" style={{display: 'flex', justify: 'center', flexDirection: "column"}}>
        
        <InputLabel htmlFor="serial-no" sx={{ 
          color: 'black', 
          fontSize: '0.9rem', 
          mb: -0.7 
        }}>Serial No.</InputLabel>
        <OutlinedInput id="serial-no" placeholder={"ABC123!@#XYZ"} />
        <Filter value="To"/>
        <Filter value="From"/>
        <DateFilter />
        <InputLabel htmlFor="price" sx={{ 
          color: 'black', 
          fontSize: '0.9rem', 
          mb: -0.7 
        }}>Price</InputLabel>
        <OutlinedInput id="price" placeholder={"50.00"} />
      </form>
    </div>
    <div style={{padding: '20px'}}>
      <UploadFile />
    </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </div>
    </div>
  );
};