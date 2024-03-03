import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function Sidebar() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);

  const handleCheck1 = (event) => {
    setChecked1(event.target.checked);
  };
  const handleCheck2 = (event) => {
    setChecked2(event.target.checked);
  };
  const handleCheck3 = (event) => {
    setChecked3(event.target.checked);
  };
  const handleCheck4 = (event) => {
    setChecked4(event.target.checked);
  };
  const handleCheck5 = (event) => {
    setChecked5(event.target.checked);
  };
  return (
    <Box sx={{ ml: { xs: 0, md: 5 } }}>
      <Box ml={2}>
        <Typography variant="h6" sx={{ fontWeight: 550 }} align="left">
          New Arrivals
        </Typography>
        <Typography variant="body2" align="left">
          New Arrivals
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 550, mt: 7 }} align="left">
          CATEGORY
        </Typography>
      </Box>
      {/* CATEGORY options */}
      <List>
        <ListItem disablePadding>
          <ListItemButton to="bun-bo-truyen-thong">
            <ListItemText primary="Bún bò truyền thống" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton to="bun-bo-tho-da">
            <ListItemText primary="Bún bò thố đá" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton to="goi-mon-them">
            <ListItemText primary="Món gọi thêm" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton to="/juice">
            <ListItemText primary="Đồ uống" />
          </ListItemButton>
        </ListItem>
      </List>
      <Box ml={2}>
        {/* Filter by price */}
        <Typography variant="h6" sx={{ fontWeight: 550, mt: 7 }} align="left">
          PRICE
        </Typography>
        <Box sx={{ ml: -1 }}>
          <Stack direction={"row"} alignItems={"center"} sx={{ m: 0 }}>
            <Checkbox
              checked={checked1}
              onChange={handleCheck1}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>0 - 60.000 VNĐ</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Checkbox
              checked={checked2}
              onChange={handleCheck2}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>61.000 - 100.000 VNĐ</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Checkbox
              checked={checked3}
              onChange={handleCheck3}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>101.000 - 120.000 VNĐ</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Checkbox
              checked={checked4}
              onChange={handleCheck4}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>120.000 - 200.000 VNĐ</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Checkbox
              checked={checked5}
              onChange={handleCheck5}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>200.000 VNĐ +</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
