import { Box, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function SingleProduct({ data }) {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log(data.name);
    navigate("/prodetail", { state: data })
  };


  return (
    <Card sx={{ cursor: "pointer", height: 500 }} onClick={handleClick}>
      <CardMedia sx={{ height: 345 }} image={data.image} title={data.name} />
      <CardContent>
        <Typography
          gutterBottom
          sx={{ fontWeight: 600 }}
          component="div"
          align="left"
        >
          {data.name}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Rating
            name="read-only"
            value={3}
          // onChange={handleRatingChange}
          />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }} align="left">
          {data.price} VNĐ
        </Typography>
      </CardContent>
    </Card>
  );
}
