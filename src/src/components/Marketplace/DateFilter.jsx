import React from "react";
import { DatePicker, Typography } from "antd";
import { Box } from "@mui/material";

export const DateFilter = ({handleChange}) => {
  return (
    <Box sx={{marginTop:2}}>
        <Typography variant="h5">Date</Typography>
      <DatePicker onChange={(date,dateString)=> handleChange(dateString)} />
    </Box>
  );
};
