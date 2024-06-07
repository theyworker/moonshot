import React from 'react';
import { Typography, Button, OutlinedInput, InputLabel } from '@mui/material';
import { Filter } from '../Marketplace/Filter';
import { DateFilter } from '../Marketplace/DateFilter';
import { UploadFile } from './UploadFile';
import {
  useQueryCall,
  useUpdateCall,
  useUserPrincipal,
} from '@ic-reactor/react';

export const SellTicket = () => {
  // const { data: count, call: refetchCount } = useQueryCall({
  //   functionName: 'get',
  // });

  const [formData, setFormData] = React.useState({
    serialNo: '',
    from: '',
    to: '',
    date: '',
    price: '',
  });

  const updateSerialNo = (value) => {
    setFormData({
      ...formData,
      serialNo: value,
    });
  };

  const updateFrom = (value) => {
    setFormData({
      ...formData,
      from: value,
    });
  };
  const updateTo = (value) => {
    setFormData({
      ...formData,
      to: value,
    });
  };
  const updateDate = (value) => {
    setFormData({
      ...formData,
      date: value,
    });
  };
  const updatePrice = (value) => {
    setFormData({
      ...formData,
      price: value,
    });
  };

  const principal = useUserPrincipal();
  const { call: createTicket, loading } = useUpdateCall({
    functionName: 'createTicket',
    // args: [
    //   {
    //     name: 'Devaka',
    //     // departureDate: '20254043',
    //     // departureCity: 'Colombo',
    //     // destinationCity: 'Toronto',
    //     // status: '2',
    //     // owner: 'Dev',
    //   },
    // ],
    onSuccess: () => {
      console.log('Ticket created');
    },
    onError: (e) => {
      console.log('Error creating ticket', e);
    },
  });

  const { call: newTicket, loadingnt } = useUpdateCall({
    functionName: 'newTicket',
    args: [
      formData.serialNo,
      formData.date,
      formData.from,
      formData.to,
      formData.price,
    ],

    onSuccess: () => {
      console.log('Ticket created');
    },
    onError: (e) => {
      console.log('Error creating ticket', e);
    },
  });

  const submitTicket = () => {
    if (
      formData.serialNo &&
      formData.from &&
      formData.to &&
      formData.date &&
      formData.price
    ) {
      newTicket();
    }
    else {
      alert('Please fill all the fields')
    }
  };
  return (
    <div>
      <Typography sx={{ padding: '30px', fontSize: '1.6rem' }}>
        Sell Tickets
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div style={{ padding: '20px' }}>
          <form
            noValidate
            autoComplete="off"
            style={{
              display: 'flex',
              justify: 'center',
              flexDirection: 'column',
            }}
          >
            <InputLabel
              htmlFor="serial-no"
              sx={{
                color: 'black',
                fontSize: '0.9rem',
                mb: -0.7,
              }}
            >
              Serial No.
            </InputLabel>
            <OutlinedInput
              id="serial-no"
              placeholder={'ABC123!@#XYZ'}
              onChange={(event) => updateSerialNo(event.target.value)}
            />
            <Filter value="To" handleChange={updateTo} />
            <Filter value="From" handleChange={updateFrom} />
            <DateFilter handleChange={updateDate} />
            <InputLabel
              htmlFor="price"
              sx={{
                color: 'black',
                fontSize: '0.9rem',
                mb: -0.7,
              }}
            >
              Price
            </InputLabel>
            <OutlinedInput
              id="price"
              placeholder={'50.00'}
              onChange={(event) => updatePrice(event.target.value)}
            />
          </form>
        </div>
        <div style={{ padding: '20px' }}>
          <UploadFile />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => submitTicket()}
        >
          Submit
        </Button>

        
      </div>
    </div>
  );
};
