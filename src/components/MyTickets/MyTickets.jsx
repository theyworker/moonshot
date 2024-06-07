import { Box, Button, Typography } from '@mui/material';
import { Table } from 'antd';
import React from 'react';

const manageButton = <Button variant="contained">Manage</Button>;

const routes = [
  'Toronto to New York',
  'Los Angeles to Chicago',
  'Houston to Phoenix',
  'San Diego to Seattle',
];
const statuses = ['Pending', 'Confirmed', 'Cancelled'];

const getRandomTicket = () => {
  console.log('getRandomTicket: Starting');

  const randomRoute = routes[Math.floor(Math.random() * routes.length)];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const randomPrice = `$${Math.floor(Math.random() * 100) + 50}`;
  const id = `X${Math.floor(Math.random() * 10000)}`;

  return {
    key: id,
    id: id,
    date: getRandomDate(),
    route: randomRoute,
    status: randomStatus,
    price: randomPrice,
    manage: manageButton,
  };
};

const getRandomDate = () => {
  const today = new Date();
  const randomDayOffset = Math.floor(Math.random() * 61); // random number between -30 and 30
  const randomDate = new Date();
  randomDate.setDate(today.getDate() + randomDayOffset);
  return randomDate.toLocaleDateString();
};

const dataSource = Array.from({ length: 5 }, getRandomTicket);

const columns = [
  {
    title: 'Ticket ID ',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Route',
    dataIndex: 'route',
    key: 'route',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '',
    dataIndex: 'manage',
    key: 'manage',
  },
];

export const MyTickets = () => {
  return (
    <Box sx={{ padding: '30px' }}>
      <Typography sx={{ padding: '20px', fontSize: '1.6rem' }}>
        My Tickets
      </Typography>
      <Table dataSource={dataSource} columns={columns} />
    </Box>
  );
};
