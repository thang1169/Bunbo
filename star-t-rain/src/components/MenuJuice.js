import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FilterAndSort from "./FilterAndSor";
import SingleProduct from "./SingleCard";

const dataProduct = [
  {
    id: 1,
    name: "Nước suối",
    rating: 1,
    image:
      "https://ews.com.vn/wp-content/uploads/2015/03/n%C6%B0%E1%BB%9Bc-tinh-khi%E1%BA%BFt.jpg",
    price: "15.000",
  },
  {
    id: 2,
    name: "Trà chanh",
    rating: 2,
    image:
      "https://cdn.tgdd.vn/Files/2021/08/23/1377290/cach-lam-tra-chanh-hong-kong-ngon-chuan-vi-ngoai-quan-202201210008425468.jpeg",
    price: "25.000",
  },
  {
    id: 3,
    name: "Trà vải",
    rating: 3,
    image:
      "https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/6/22/photo-2-1687443514678207328363.jpg",
    price: "25.000",
  },
  {
    id: 4,
    name: "Coca Cola",
    rating: 3,
    image: "https://songseafoodgrill.vn/wp-content/uploads/2022/03/Coca-2.png",
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

function MenuJuice() {
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
        GIẢI KHÁT
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

export default MenuJuice;
