import { Box } from "@mui/material";
import BreakdownChart from "components/BreakdownChart";
import Header from "components/Header";
import React from "react";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="80px" height="60vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
