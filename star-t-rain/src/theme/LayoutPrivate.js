import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const LayoutPrivate = () => {
  return (
    <Box>
         <>
      <Header />
      <div className='flex'>
        <div className=' w-[25%] h-[100%]' >
          <Sidebar />
        </div>
        <div className='w-[75%] h-[100%]'>
        <Outlet />
        </div>
      </div>
    </>
    </Box>
  );
};
export default LayoutPrivate;