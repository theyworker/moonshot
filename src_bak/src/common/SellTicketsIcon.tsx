import React from "react";
import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

export const SellTicketsIcon = () => {
  return (
    <div>
      <Link
        to="/sell-ticket"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "black",
            fontSize: "1.2rem",
            paddingLeft: "30px",
            marginBottom: "-10px",
          }}
        >
          Sell Tickets
        </Typography>
      </Link>
    </div>
  );
};
