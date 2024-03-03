import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FilterAndSort from "../components/FilterAndSor";
import SingleProduct from "../components/SingleCard";

const dataProduct = [
  {
    id: 1,
    name: "Thập Cẩm",
    rating: 1,
    image:
      "https://static.vinwonders.com/production/bun-bo-tho-da-da-lat-banner.jpg",
    price: "15.000",
  },
  {
    id: 2,
    name: "Thố Tái",
    rating: 2,
    image:
      "https://du-lich-da-lat.com/wp-content/uploads/2023/09/Bun-bo-tho-da-Song-Huong.jpeg",
    price: "25.000",
  },
  {
    id: 3,
    name: "Thố Đầy Đủ",
    rating: 3,
    image:
      "https://vi.alongwalker.co/img/post_images/51109b90e93f14c306870640cd0b4e38.jpg",
    price: "25.000",
  },
  {
    id: 4,
    name: "Combo",
    rating: 3,
    image:
      "https://top10vn.org/wp-content/uploads/2021/12/bun-bo-tho-da-e1638936782278.jpeg",
    price: "25.000",
  },
  {
    id: 5,
    name: "Sữa đậu nành",
    rating: 5,
    image:
      "https://media.vneconomy.vn/images/upload/2021/04/21/1114510-15583224785381977809742.jpg",
    price: "25.000",
  },
];

function BunBoPhoDa() {
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
        Bún Bò Phố Đá
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

export default BunBoPhoDa;
