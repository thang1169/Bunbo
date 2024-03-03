import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SingleProduct from "../../components/SingleCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLocation } from "react-router-dom";
const dataProduct = [
  {
    id: 1,
    name: "Bùn Bò Tái Nạm",
    rating: 1,
    image:
      "https://static.vinwonders.com/production/bun-bo-nha-trang-1.jpg",
    price: "15.000",
  },
  {
    id: 2,
    name: "Bún Bò Tái Wangyu",
    rating: 2,
    image:
      "https://img-global.cpcdn.com/recipes/020745ddc8e14bdd/680x482cq70/bun-bo-hu%E1%BA%BF-tai-n%E1%BA%A1m-recipe-main-photo.jpg",
    price: "25.000",
  },
  {
    id: 3,
    name: "Bún Bò Tô Nhỏ",
    rating: 3,
    image:
      "https://cdn3.ivivu.com/2022/09/bun-bo-hue-ivivu-3.jpg",
    price: "25.000",
  },
  {
    id: 4,
    name: "Bún Bò Gân",
    rating: 3,
    image: "https://cdn3.ivivu.com/2022/09/bun-bo-hue-ivivu-2.jpg",
    price: "25.000",
  },
];

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");
  const location = useLocation();
  console.log("data chi tiết món ăn: ", location.state);
  const handleChange = (event) => {
    if (event.target.value <= 0) {
      setErrorMsg("Số lượng phải lớn hơn 0!");
      setQuantity(0);
    } else {
      setQuantity(event.target.value);
      setErrorMsg("");
    }
  };
  const handleClick = (type) => {
    if (type === "REMOVE") {
      if (quantity === 1) {
        setErrorMsg("Số lượng phải lớn hơn 0!");
        setQuantity(0);
      }
      if (quantity > 1) {
        setQuantity(quantity - 1);
        setErrorMsg("");
      }
    }
    if (type === "ADD") {
      setQuantity(quantity + 1);
      setErrorMsg("");
    }
  };
  return (
    <div>
      <Grid container sx={{ p: 10 }} columnSpacing={3}>
        <Grid container item lg={9} xs={12} spacing={3}>
          <Grid item xs={12} md={6}>
            <CardMedia
              sx={{ height: 400 }}
              image={
                "https://cdn.tgdd.vn/Files/2021/12/29/1407591/10-quan-bun-bo-tuyet-hao-tai-quan-2-de-co-the-lua-chon-202112290915591328.jpg"
              }
              title={"img"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <CardMedia
              sx={{ height: 400 }}
              image={
                "https://datviettour.com.vn/uploads/images/tin-tuc-SEO/mien-trung/hue/noi-dung/bun-hue-hem.jpg"
              }
              title={"img"}
            />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <CardMedia
              sx={{ height: { xs: 400, sm: 500 }, mt: 3 }}
              image={
                "https://static.vinwonders.com/production/bun-bo-hue-cau-giay-1.jpg"
              }
              title={"img"}
            />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Box sx={{ bgcolor: "#fdd835", height: { xs: 500, sm: 400, md: 300 }, p: 10, mb: 2 }}>
              <Typography align="left" variant="h5" sx={{ fontWeight: 700 }}>
                Detail
              </Typography>
              <Typography
                align="left"
                variant="h6"
                sx={{ fontWeight: 700, mt: 2 }}
              >
                Tái + Nạm + Gân + Giò + Sườn Sụn + Chả cua viên + Chả cây Huế
              </Typography>
              <Typography align="left" variant="body1" sx={{ mt: 10 }}>
                Art No 1200238293b
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Typography align="left" variant="h5" sx={{ fontWeight: 700, ml: 1 }}>
            {location.state.name}
          </Typography>
          <Typography
            align="left"
            variant="h6"
            sx={{ fontWeight: 600, ml: 1, mt: 1 }}
          >
            100.000 VNĐ
          </Typography>
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            sx={{ mt: 5, mb: 5 }}
          >
            <PlaceIcon />
            <Typography>Address is available</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} sx={{ ml: 5 }}>
            <IconButton size="large" onClick={() => handleClick("REMOVE")}>
              <RemoveIcon />
            </IconButton>

            <TextField
              size="small"
              type="number"
              onChange={handleChange}
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              value={quantity}
              error={errorMsg ? true : false}
              helperText={errorMsg ? errorMsg : ""}
              sx={{ width: 180 }}
            />
            <IconButton size="large" onClick={() => handleClick("ADD")}>
              <AddIcon />
            </IconButton>
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "flex-start", ml: 3 }}>
            <Button
              variant="contained"
              sx={{ width: 333, mt: 2, backgroundColor: "#4C8787" }}
            >
              ADD TO CART
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ p: 5 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 2, ml: 6 }}
          align="left"
        >
          Có thể bạn sẽ thích
        </Typography>
        <Stack direction={"row"}>
          <IconButton
            size="large"
            sx={{ visibility: { xs: "hidden", md: "visible" } }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Grid container spacing={2}>
            {dataProduct.map((p, index) => (
              <Grid item md={4} lg={3} xs={12} sm={6} key={index}>
                <SingleProduct data={p} />
              </Grid>
            ))}
          </Grid>
          <IconButton
            size="large"
            sx={{ visibility: { xs: "hidden", md: "visible" } }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </Box>
    </div>
  );
}
