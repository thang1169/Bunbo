import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FilterAndSort from "../components/FilterAndSor";
import SingleProduct from "../components/SingleCard";

const dataProduct = [
  {
    id: 1,
    name: "Tái",
    rating: 1,
    image: "https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg",
    price: "15.000",
  },
  {
    id: 2,
    name: "Thập Cẩm",
    rating: 2,
    image:
      "https://www.thatlangon.com/wp-content/uploads/2021/02/15523img_6035a6a9109f1.jpg",
    price: "25.000",
  },
  {
    id: 3,
    name: "Combo",
    rating: 3,
    image:
      "https://cdn.tgdd.vn//News/1531542//bun-bo-bao-nhieu-calo-an-bun-bo-co-map-khong-cach-1-800x450.jpg",
    price: "25.000",
  },
  {
    id: 4,
    name: "Bình Dân",
    rating: 3,
    image: "https://static.vinwonders.com/production/bun-bo-hue-cau-giay-1.jpg",
    price: "25.000",
  },
  {
    id: 5,
    name: "Gầu",
    rating: 5,
    image:
      "https://dienmaynewsun.com/wp-content/uploads/2021/07/bun-bo-hue-2.jpg",
    price: "25.000",
  },
];

function BunBoTruyenThong() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 550,
          mb: { xs: 0, md: 8 },
          mt: { xs: 5, sm: 0 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Bún Bò Truyền Thống
      </Typography>
      <Grid container sx={{ mb: 2 }}>
        <Grid item sm={9} xs={6}>
          <FilterAndSort />
        </Grid>
        <Grid item sm={3} xs={6} sx={{ pr: { md: 5, xs: 0 } }}>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <Button sx={{ color: "#00838f" }}>Models</Button>
            <Button sx={{ color: "black" }}>Products</Button>
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ pr: { md: 5 } }}>
        {dataProduct.map((p, index) => (
          <Grid item md={4} lg={3} xs={12} sm={6} key={index}>
            <SingleProduct data={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BunBoTruyenThong;
