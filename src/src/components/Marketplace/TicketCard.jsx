import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import train from "./assets/via.jpg";
import bus from "./assets/bus.jpg";
import { getDateString } from "./helpers";

export const TicketCard = ({route, date, price}) => {

    return (
    <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
      <CardActionArea>
        <Box
          sx={{
            background: "white",
            borderRadius: 5,
            position: "absolute",
            top: 5,
            right: 10,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 18, fontWeight: 600, padding: "1px 10px"
             }}
          >
            {"$" + price}
          </Typography>
        </Box>
        <CardMedia
          component="img"
          height="140"
          image={price > 99 ? train : bus}
          alt="green iguana"
        />

        <CardContent sx={{ display: "flex" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 18, fontWeight: 600 }}
          >
            {route}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "end", width: "40%" }}
          >
            {getDateString(date)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
