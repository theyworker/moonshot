import React from 'react';
import { Select } from 'antd';
import { Box, Typography } from '@mui/material';

export const Filter = ({ value, selected, handleSelected, handleChange }) => {
  return (
    <Box>
      <Typography component="h3">{value}</Typography>

      <Select
        onChange={handleChange}
        placeholder="Select City"
        style={{ width: 150 }}
      >
        <Select.Option value="Toronto">Toronto</Select.Option>
        <Select.Option value="New York">New York</Select.Option>
        <Select.Option value="Vancouver">Vancouver</Select.Option>
        <Select.Option value="Montreal">Montreal</Select.Option>
        <Select.Option value="Calgary">Calgary</Select.Option>
        <Select.Option value="Ottawa">Ottawa</Select.Option>
        <Select.Option value="Quebec">Quebec</Select.Option>
        <Select.Option value="Edmonton">Edmonton</Select.Option>
        <Select.Option value="Winnipeg">Winnipeg</Select.Option>
        <Select.Option value="Halifax">Halifax</Select.Option>
        <Select.Option value="Victoria">Victoria</Select.Option>
      </Select>
    </Box>
  );
};
